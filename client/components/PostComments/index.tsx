import React from "react";
import { Typography, Paper, Tabs, Tab, Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styles from "../../pages/news/Slug.module.scss";
import Comment from "../../components/Comment";
import { useState } from "react";
import AddCommentForm from "../AddCommentForm";
import data from "../../data";

const PostComments: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const comments = data.comments[activeTab ? "new" : "popular"];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <div className="d-flex justify-between mb-20">
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
        <AddCommentForm />
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <div>
          {comments.map((obj) => (
            <Comment
              key={obj.id}
              user={obj.user}
              text={obj.text}
              createdAt={obj.createdAt}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default PostComments;
