import { Checkbox, FormControlLabel, Button } from '@mui/material';
import React from "react";
import CustomLabel from "../../FormControls/Label";

const NotificationsSetting = () => {
  return (
    <form>
      <CustomLabel title="Письма на почту" />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Ответы на мои комментарии"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Оценка записей и комментариев"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Упоминания в комментариях к постам"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Новые сообщения"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Лучшее за неделю"
      />
      <CustomLabel title="Уведомления на сайте" />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Ответы на мои комментарии"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Упоминания в комментариях к постам"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Оценка записей и комментариев"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Новые комментарии к постам"
      />
      <FormControlLabel
        style={{ display: "block" }}
        control={<Checkbox defaultChecked />}
        label="Новые подписчики"
      />
      <Button color="primary" variant="outlined">
        Сохранить
      </Button>
    </form>
  );
};

export default NotificationsSetting;
