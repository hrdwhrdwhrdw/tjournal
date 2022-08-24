import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Paper, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import Comment from "../../components/Comment";
import { useAppSelector } from "../../hooks/hooks";
import styles from "../../pages/news/Slug.module.scss";
import { selectUserData } from "../../redux/users/userSlice";
import { CommentItem } from "../../utils/api/types";
import AddCommentForm from "../AddCommentForm";

interface PostCommentsType {
  comments: CommentItem[];
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
  postId: number;
}

const PostComments: React.FC<PostCommentsType> = ({
  comments,
  setComments,
  postId,
}) => {
  const userData = useAppSelector(selectUserData);
  const [isPopup, setIsPopup] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState<number>(null);

  const onSuccessAddComment = (obj: CommentItem) => {
    setComments((prev: CommentItem[]) => [...prev, obj]);
  };

  const onSuccessEditComment = (obj: CommentItem) => {
    setEditId(null);
    setEditInput("");
    setComments((prev: CommentItem[]) =>
      prev.map((item) => (obj.id === item.id ? obj : item))
    );
  };

  const onRemoveItem = (id: number) => {
    setComments((prev: CommentItem[]) => prev.filter((obj) => obj.id !== id));
  };

  const onCommentEdit = (id: number, text: string) => {
    setEditId(id);
    setEditInput(text);
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <div className="d-flex justify-between mb-20">
          <Typography variant="h6">{comments.length} комментария</Typography>
          <div className={styles.popupWrapper}>
            {/* <Button
              variant="contained"
              className="mr-20 ml-auto"
              onClick={() => setIsPopup(!isPopup)}
            > */}
            <TuneIcon onClick={() => setIsPopup(!isPopup)} />
            {/* </Button> */}
            {/* <Button variant="contained"> */}
            <NotificationsNoneIcon />
            {/* </Button> */}
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
            onSuccessEditComment={onSuccessEditComment}
            editId={editId}
            editInput={editInput}
          />
        )}
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
              onCommentEdit={onCommentEdit}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default PostComments;
