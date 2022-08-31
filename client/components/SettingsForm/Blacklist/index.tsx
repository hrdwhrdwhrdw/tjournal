import React from "react";
import CustomLabel from "../../FormControls/Label/index";
import CustomInput from "../../FormControls/Input/index";
import { Button } from "@mui/material";

const BlackListSettings = () => {
  return (
    <form>
      <CustomLabel title="Фильтры ленты по словам" />
      <div className="d-flex align-center justify-between">
        <CustomInput placeholder="Ключевой #тег или символ" />
        <Button variant="contained" style={{ marginLeft: 15, height: "100%" }}>
          Добавить
        </Button>
      </div>
      <CustomLabel title="Пользователи" />
      <CustomInput placeholder="Имя или ссылка" />
    </form>
  );
};

export default BlackListSettings;
