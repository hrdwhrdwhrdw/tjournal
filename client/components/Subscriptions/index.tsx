import { Button, Paper } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import { selectProfileData } from "../../redux/profile/profileSlice";
import styles from "./Subscriptions.module.scss";
import { useState } from "react";
import clsx from "clsx";

const Subscriptions = () => {
  const profile = useAppSelector(selectProfileData);
  const [isSub, setIsSub] = useState(false);

  return (
    profile && (
      <Paper elevation={0}>
        <Button className={styles.button} onClick={() => setIsSub(!isSub)}>
          {profile.fullName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="92"
            viewBox="0 0 92 92"
            className={clsx(isSub && styles.sub)}
          >
            <path d="M90.8 26.4L65.6 1.2c-1.6-1.6-4.1-1.6-5.7 0-.3.3-7.6 7.8-4.8 17.6L43.7 30.2c-6.3-1.9-22.4-5.2-34.3 6.7-1.6 1.6-1.6 4.1 0 5.7l17.2 17.2L1.2 85.2c-1.6 1.6-1.6 4.1 0 5.7C2 91.6 3 92 4 92s2-.4 2.8-1.2l25.4-25.4 17.2 17.2c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2 11.9-11.9 8.6-28.1 6.7-34.3l11.4-11.4c9.8 2.8 17.2-4.5 17.6-4.8 1.7-1.6 1.7-4.1.1-5.7zm-16.9 2.2c-1.5-.7-3.3-.4-4.5.8l-15 15c-1.1 1.1-1.5 2.9-.9 4.3 0 0 1.8 4.5 2.1 10.3.3 5.8-.9 10.7-3.6 14.8L35 57 18 40c10.7-7.2 24.5-1.8 25.1-1.5 1.5.6 3.2.3 4.4-.9l15-15c1.2-1.2 1.5-3 .8-4.5-1.4-3-.9-5.7 0-7.8l18.4 18.4c-2 .8-4.8 1.3-7.8-.1zM50.2 50.3c.1.3 1.4 3.2 1.3 6.3 0 1.9-1.6 3.4-3.5 3.4h-.1c-1.9-.1-3.5-1.7-3.4-3.6 0-1.3-.5-2.8-.7-3.3-.8-1.8 0-3.8 1.8-4.6 1.8-.7 3.9 0 4.6 1.8z" />
          </svg>
        </Button>
      </Paper>
    )
  );
};

export default Subscriptions;
