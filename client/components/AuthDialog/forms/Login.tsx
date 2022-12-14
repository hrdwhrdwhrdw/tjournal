import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import { setCookie } from "nookies";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/hooks";
import { setAuthData } from "../../../redux/auth/authSlice";
import { Api } from "../../../utils/api/index";
import { LoginDto } from "../../../utils/api/types";
import { LoginFormSchema } from "../../../utils/schemas/validation";
import FormField from "../../FormField";
import { SubmitHandler, FieldValues } from "react-hook-form/dist/types";

interface LoginFormTypes {
  onOpenRegister: () => void;
}

const LoginForm: React.FC<LoginFormTypes> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
      dispatch(setAuthData(data));
    } catch (error: any) {
      if (error.message) {
        setErrorMessage(error.response.data);
      }
    }
  };

  return (
    <Paper className="p-20" elevation={0}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        >
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          {errorMessage && (
            <Alert severity="error" className="mb-25">
              {errorMessage}
            </Alert>
          )}
          <div className="d-flex">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Войти
            </Button>
            <Button color="primary" fullWidth onClick={onOpenRegister}>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default LoginForm;
