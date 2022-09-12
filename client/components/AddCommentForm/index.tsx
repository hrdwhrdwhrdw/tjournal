import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { Api } from "../../utils/api/index";
import { CommentItemType } from '../../utils/api/types';
import styles from "./AddCommentForm.module.scss";
import { useEffect } from "react";

interface AddCommentFormTypes {
  postId: number;
  editId?: number;
  editInput?: string;
  onSuccessAddComment: (obj: CommentItemType) => void;
  onSuccessEditComment: (obj: CommentItemType) => void;
}

const AddCommentForm: React.FC<AddCommentFormTypes> = ({
  postId,
  onSuccessAddComment,
  onSuccessEditComment,
  editId,
  editInput,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (editInput) {
      setText(editInput);
      setIsClicked(true);
    }
  }, [editId, editInput]);

  const onAddComment = async () => {
    try {
      setIsLoading(true);
      const comment = await Api().comment.create({ postId, text });
      setIsClicked(false);
      setText("");
      onSuccessAddComment(comment);
    } catch (error) {
      console.log("AddComment", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onEditComment = async () => {
    try {
      setIsLoading(true);
      let comment = await Api().comment.update(editId, { postId, text });
      setIsClicked(false);
      setText("");
      onSuccessEditComment(comment);
    } catch (error) {
      console.log("AddComment", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
        value={text}
        multiline
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        minRows={isClicked ? 6 : 1}
        onFocus={() => setIsClicked(true)}
      />
      {isClicked && !editId && (
        <Button
          disabled={isLoading}
          className={styles.addButton}
          variant="contained"
          onClick={() => onAddComment()}
        >
          Отправить
        </Button>
      )}
      {isClicked && editId && (
        <Button
          disabled={isLoading}
          className={styles.addButton}
          variant="contained"
          onClick={() => onEditComment()}
        >
          Редактировать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
