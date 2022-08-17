import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Comment from "../../components/Comment";
import { useAppSelector } from "../../hooks/hooks";
import useComments from "../../hooks/useComments";
import styles from "../../pages/news/Slug.module.scss";
import { selectUserData } from "../../redux/users/userSlice";
import { Api } from "../../utils/api";
import { CommentItem } from "../../utils/api/types";
import AddCommentForm from "../AddCommentForm";
import Skeleton from "../Skeleton";

interface PostCommentsType {
  postId: number;
}

const PostComments: React.FC<PostCommentsType> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [isPopup, setIsPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const { comments, setComments } = useComments();
  // const { comments, setComments } = useComments(postId);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const comments = await Api().comment.getAll(postId);
  //       setComments(comments);
  //     } catch (error) {
  //       console.log("get comments", error);
  //     }
  //   })();
  // }, []);

  const onSuccessAddComment = (obj: CommentItem) => {
    setComments((prev: CommentItem[]) => [...prev, obj]);
  };

  const onRemoveItem = (id: number) => {
    setComments((prev: CommentItem[]) => prev.filter((obj) => obj.id !== id));
  };

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
        {userData && (
          <AddCommentForm
            postId={postId}
            onSuccessAddComment={onSuccessAddComment}
          />
        )}
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
              currentUserId={userData?.id}
              id={obj.id}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default PostComments;
