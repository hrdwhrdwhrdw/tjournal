import React from "react";
import { Button, Paper } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/schemas/validation";
import FormField from "../../FormField";

interface RegisterFormFormTypes {
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormFormTypes> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (form: any) => console.log(form.formState.errors);

  return (
    <Paper className="p-20" elevation={0}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullName" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div>
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" fullWidth type="submit">
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
