import { MainLayout } from "../../layouts/MainLayout";
import FullPost from "../../components/FullPost/index";
import { Typography, Paper, Tabs, Tab, Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import styles from "./Slug.module.scss";
import Comment from "../../components/Comment";

const Slug: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <MainLayout contentFullWidth className="mb-50">
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <div className="d-flex justify-between">
          <Typography variant="h6">42 комментария</Typography>
          <div className={styles.popupWrapper}>
            <Button
              variant="contained"
              className="mr-20 ml-auto"
              onClick={() => setIsPopup(!isPopup)}
            >
              <TuneIcon />
            </Button>
            <Button variant="contained">
              <NotificationsNoneIcon />
            </Button>
            {isPopup ? (
              <div className={styles.popup}>
                <ul className={styles.popupList}>
                  <li>
                    <Button variant="contained">Лучшие</Button>
                  </li>
                  <li>
                    <Button variant="contained">Популярные</Button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Paper>
    </MainLayout>
  );
};

export default Slug;
