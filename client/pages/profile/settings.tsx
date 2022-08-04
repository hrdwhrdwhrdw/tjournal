import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { MainLayout } from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">
          Основные настройки
          <Divider className="mt-20 mb-20" />
        </Typography>
        <form>
          <TextField
            className="mb-15"
            variant="outlined"
            size="small"
            fullWidth
            required
            label="Никнейм"
          />
          <TextField
            className="mb-15"
            variant="outlined"
            size="small"
            fullWidth
            required
            label="Почта"
          />
          <TextField
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            required
            label="Пароль"
          />
          <Divider className="mt-20 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
};

export default Settings;