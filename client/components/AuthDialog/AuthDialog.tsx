import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./AuthDialog.module.scss";
import { useState } from "react";
import { TextField, Paper } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Main from "./forms/Main";
import LoginForm from "./forms/Login";
import RegisterForm from "./forms/Register";
interface AuthDialogTypes {
  open: boolean;
  onClose: () => void;
}

const AuthDialog: React.FC<AuthDialogTypes> = ({ open, onClose }) => {
  const [formType, setFormType] = useState<"main" | "login" | "register">(
    "main"
  );
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.authContent}>
            <Typography className={styles.authTitle}>
              {formType === "main" ? (
                "Вход в аккаунт"
              ) : (
                <p className={styles.authTitle}>
                  <div
                    className={styles.backButton}
                    onClick={() => setFormType("main")}
                  >
                    <ArrowBackIosNewIcon /> Назад
                  </div>
                  {formType === "login" ? "Вход в аккаунт" : "Регистрация"}
                </p>
              )}
            </Typography>
            {formType === "main" && (
              <Main onOpenLogin={() => setFormType("login")} />
            )}
            {formType === "login" && (
              <LoginForm onOpenRegister={() => setFormType("register")} />
            )}
            {formType === "register" && (
              <RegisterForm onOpenLogin={() => setFormType("login")} />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
