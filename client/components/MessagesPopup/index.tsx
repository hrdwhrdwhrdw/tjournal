import { Divider, Paper } from "@mui/material";
import styles from "./MessagesPopup.module.scss";

const MessagesPopup = () => {
  return (
    <Paper className={styles.messagesPopup} elevation={2}>
      <div className={styles.title}>Сообщения</div>
      <Divider />
      <div className="d-flex justify-center align-center p-30 flex-column">
        <span className={styles.subtitle}>Пока нет диалогов</span>
        <p className="text-center">
          Начать общение можно с помощью кнопки «Написать» в профиле
          пользователя
        </p>
      </div>
    </Paper>
  );
};

export default MessagesPopup;
