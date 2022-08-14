import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import styles from "./FullPost.module.scss";
import PostActions from "../PostActions";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { OutputData } from "@editorjs/editorjs";

interface FullPostType {
  title: string;
  blocks: OutputData["blocks"];
}

const FullPost: React.FC<FullPostType> = ({ title, blocks }) => {
  return (
    <Paper className={styles.paper} elevation={0}>
      <div className="container">
        <Typography className={styles.title} variant="h5">
          {title}
        </Typography>
        {blocks.map((obj) => (
          <Typography
            key={obj.id}
            dangerouslySetInnerHTML={{ __html: obj.data.text }}
          />
        ))}
        <div style={{ width: 300 }}>
          <PostActions />
        </div>
        <div className={styles.userInfoWrapper}>
          <div className={styles.userInfo}>
            <img
              src="https://leonardo.osnova.io/08bb4cce-7fb7-5817-953e-6183a6734bbe/-/scale_crop/108x108/-/format/webp"
              alt="avatar"
            />
            <b>Родина слонов</b>
            <span>+635</span>
          </div>
          <div className="df-flex align-center">
            <Button variant="contained" className="mr-10">
              <ChatBubbleOutlineIcon />
            </Button>
            <Button variant="contained">
              <PersonAddIcon />
              <b className="ml-10">Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default FullPost;
