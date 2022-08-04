import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormSchema } from "../../../utils/schemas/validation";
import FormField from "../../FormField";

interface LoginFormTypes {
  onOpenRegister: () => void;
}

const LoginForm: React.FC<LoginFormTypes> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (form: any) => console.log(form.formState.errors);

  return (
    <Paper className="p-20" elevation={0}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex">
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" fullWidth type="submit">
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
