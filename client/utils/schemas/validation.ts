import * as yup from "yup";

export const LoginFormSchema = yup
  .object({
    email: yup.string().email("Неверная почта").required("Почта не введена"),
    password: yup
      .string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .required("Пароль не введен"),
  })
  .required();

export const RegisterFormSchema = yup
  .object({
    fullName: yup
      .string()
      .min(6, "Слишком короткое имя")
      .required("Введите имя и фамилию"),
  })
  .required()
  .concat(LoginFormSchema);
