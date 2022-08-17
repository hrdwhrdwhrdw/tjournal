import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import { setCookie } from "nookies";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UserApi } from "../../../utils/api/user";
import { CreateUserDto } from "../../../utils/api/types";
import { RegisterFormSchema } from "../../../utils/schemas/validation";
import FormField from "../../FormField";
import { useAppDispatch } from "../../../hooks/hooks";
import { setUserData } from "../../../redux/users/userSlice";
import { Api } from "../../../utils/api/index";

interface RegisterFormFormTypes {
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormFormTypes> = ({ onOpenLogin }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api().user.register(dto);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
      dispatch(setUserData(data));
    } catch (error: any) {
      if (error.message) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <Paper className="p-20" elevation={0}>
      <FormProvider {...form}>
        {/* @ts-ignore */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullName" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          {errorMessage && (
            <Alert severity="error" className="mb-25">
              {errorMessage}
            </Alert>
          )}
          <div>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Зарегистрироваться
            </Button>
            <div className="d-flex mt-15 align-center">
              <span className="mr-10">Есть аккаунт?</span>
              <Button color="primary" onClick={onOpenLogin}>
                Войти
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default RegisterForm;
