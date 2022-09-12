import { yupResolver } from "@hookform/resolvers/yup";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectAuthData, setAuthData } from "../../../redux/auth/authSlice";
import { Api } from "../../../utils/api/index";
import { CreateUserDto } from "../../../utils/api/types";
import { LoginFormSchema } from "../../../utils/schemas/validation";
import CustomInput from "../../FormControls/Input/index";
import CustomLabel from "../../FormControls/Label";
import styles from "./MainSettings.module.scss";
import { useRouter } from "next/router";

const MainSettingForm = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const user = useAppSelector(selectAuthData);
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api().user.updateUser(user.id, dto);
      setErrorMessage("");
      dispatch(setAuthData(data));
      router.push(
        `/${user.fullName.toLowerCase().split(" ").join("-")}/${
          user?.id
        }/`
      );
    } catch (error: any) {
      if (error.message) {
        setErrorMessage(error.response.data);
      }
    }
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <CustomLabel title="Отображаемое имя" />
        <div>
          <CustomInput name="fullName" />
          <div className={styles.fullNameCaption}>
            Сменить никнейм можно раз в 3 месяца
          </div>
        </div>
        <CustomLabel title="Почта" />
        <CustomInput name="email" />
        <CustomLabel title="Пароль" />
        <CustomInput name="password" />
        <CustomLabel title="Связанные аккаунты" />
        <div className={styles.socialLinks}>
          <Button className={styles.socialLink}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              id="v_facebook"
              width={18}
              height={18}
            >
              <path
                d="M5.86 17.273v-4.39h4.585v-1.93H5.86V8.016h5.024V6H3.5v11.273h2.36zM17.805 17.273c2.406 0 3.898-1.25 3.898-3.226 0-1.453-1.085-2.578-2.578-2.688v-.14c1.157-.172 2.04-1.211 2.04-2.406C21.164 7.07 19.86 6 17.671 6h-4.93v11.273h5.063zm-2.703-9.468h1.969c1.125 0 1.773.539 1.773 1.437 0 .906-.695 1.43-1.969 1.43h-1.773V7.805zm0 7.664v-3.203h2.047c1.39 0 2.148.546 2.148 1.578 0 1.054-.734 1.625-2.094 1.625h-2.101z"
                fill="#2585ED"
              ></path>
            </svg>
            Facebook
          </Button>
          <Button className={styles.socialLink}>
            <TwitterIcon style={{ fill: "#1d9bf0" }} />
            Twitter
          </Button>
          <Button className={styles.socialLink}>
            <svg fill="none" viewBox="0 0 24 24" id="v_vkontakte">
              <path
                d="M2 11.583c0-4.517 0-6.776 1.403-8.18C4.807 2 7.066 2 11.583 2h.834c4.517 0 6.776 0 8.18 1.403C22 4.807 22 7.066 22 11.583v.834c0 4.517 0 6.776-1.404 8.18C19.194 22 16.934 22 12.416 22h-.833c-4.517 0-6.776 0-8.18-1.404C2 19.194 2 16.934 2 12.416v-.833z"
                fill="#2787F5"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.417 8.25H5.958c-.417 0-.5.196-.5.412 0 .387.495 2.302 2.303 4.836 1.205 1.73 2.903 2.669 4.449 2.669.927 0 1.042-.209 1.042-.568v-1.307c0-.417.087-.5.381-.5.216 0 .587.108 1.453.942.989.99 1.152 1.433 1.708 1.433h1.459c.416 0 .625-.209.505-.62-.132-.41-.604-1.004-1.23-1.709-.34-.401-.85-.834-1.005-1.05-.216-.279-.155-.402 0-.65 0 0 1.777-2.502 1.962-3.352.093-.309 0-.536-.44-.536h-1.46c-.37 0-.541.196-.634.412 0 0-.742 1.808-1.793 2.982-.34.34-.494.448-.68.448-.092 0-.226-.108-.226-.417V8.786c0-.37-.108-.536-.417-.536h-2.292c-.232 0-.372.172-.372.335 0 .352.526.433.58 1.422v2.147c0 .471-.085.556-.27.556-.495 0-1.698-1.815-2.411-3.893-.14-.404-.28-.567-.653-.567z"
                fill="#fff"
              ></path>
            </svg>
            VK
          </Button>
          <Button className={styles.socialLink}>
            <GoogleIcon style={{ fill: "#fff" }} />
            Google
          </Button>
          <Button className={styles.socialLink}>
            <AppleIcon />
            Apple
          </Button>
        </div>
        <CustomLabel title="Удаление аккаунта" />
        <div className={styles.deleteBlock}>
          Вы можете{" "}
          <span className={styles.deleteButton}>удалить свой аккаунт</span>. У
          вас будет 30 дней на восстановление.
        </div>
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Сохранить
        </Button>
      </form>
    </FormProvider>
  );
};

export default MainSettingForm;
