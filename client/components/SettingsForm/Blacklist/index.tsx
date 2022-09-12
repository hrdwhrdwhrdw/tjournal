import React from "react";
import CustomLabel from "../../FormControls/Label/index";
import CustomInput from "../../FormControls/Input/index";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { BlackListFormSchema } from "../../../utils/schemas/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const BlackListSettings = () => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(BlackListFormSchema),
  });

  return (
    <FormProvider {...form}>
      <form>
        <CustomLabel title="Фильтры ленты по словам" />
        <div className="d-flex align-center justify-between">
          <CustomInput
            placeholder="Ключевой #тег или символ"
            name="blackList"
          />
          <Button
            variant="contained"
            style={{ marginLeft: 15, height: "100%" }}
          >
            Добавить
          </Button>
        </div>
        <CustomLabel title="Пользователи" />
        <CustomInput placeholder="Имя или ссылка" name="userList" />
      </form>
    </FormProvider>
  );
};

export default BlackListSettings;
