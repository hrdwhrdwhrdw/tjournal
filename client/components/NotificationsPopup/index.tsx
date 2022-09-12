import { Divider, Paper } from "@mui/material";
import styles from "./NotificationsPopup.module.scss";

const NotificationsPopup = () => {
  return (
    <Paper className={styles.notificationsPopup} elevation={2}>
      <div className={styles.title}>Уведомления</div>
      <Divider />
      <div className="d-flex justify-center align-center p-30 flex-column">
        <img
          className={styles.notificationSmile}
          src="https://leonardo.osnova.io/7cb777ef-c2a0-5f12-9681-6479b9781054/"
          alt=""
        />
        <span className={styles.subtitle}>Уведомлений пока нет</span>
        <p className="text-center">
          Пишите хорошие статьи, комментируйте, и здесь станет не так пусто
        </p>
      </div>
    </Paper>
  );
};

export default NotificationsPopup;
