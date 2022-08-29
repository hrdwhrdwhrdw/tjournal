import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Paper, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import Comment from "../../components/Comment";
import { useAppSelector } from "../../hooks/hooks";
import styles from "../../pages/news/Slug.module.scss";
import { selectUserData } from "../../redux/users/userSlice";
import { CommentItemType } from "../../utils/api/types";
import AddCommentForm from "../AddCommentForm";

interface PostCommentsType {
  comments: CommentItemType[];
  setComments: Dispatch<SetStateAction<CommentItemType[]>>;
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

  const onSuccessAddComment = (obj: CommentItemType) => {
    setComments((prev: CommentItemType[]) => [...prev, obj]);
  };

  const onSuccessEditComment = (obj: CommentItemType) => {
    setEditId(null);
    setEditInput("");
    setComments((prev: CommentItemType[]) =>
      prev.map((item) => (obj.id === item.id ? obj : item))
    );
  };

  const onRemoveItem = (id: number) => {
    setComments((prev: CommentItemType[]) => prev.filter((obj) => obj.id !== id));
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
            <TuneIcon onClick={() => setIsPopup(!isPopup)} />
            <NotificationsNoneIcon />
            {isPopup && (
              <Paper className={styles.popup} elevation={0}>
                <ul className={styles.popupList}>
                  <li>
                    <Button>Лучшие</Button>
                  </li>
                  <li>
                    <Button>Популярные</Button>
                  </li>
                </ul>
              </Paper>
            )}
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
        <div
          className={`d-flex mt-25 mb-25 flex-column ${
            !comments.length ? "justify-center" : ''
          }`}
        >
          {!comments.length && (
            <span>
              Пока что здесь нет комментариев, оставьте, пожалуйста, свой
            </span>
          )}
          {comments.map((obj) => (
            <Comment
              key={obj.id}
              user={obj.user}
              userId={userData.id}
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
