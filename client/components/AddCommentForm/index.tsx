import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { Api } from "../../utils/api/index";
import { CommentItem } from "../../utils/api/types";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormTypes {
  postId: number;
  onSuccessAddComment: (obj: CommentItem) => void;
}

const AddCommentForm: React.FC<AddCommentFormTypes> = ({
  postId,
  onSuccessAddComment,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
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
      {isClicked && (
        <Button
          disabled={isLoading}
          className={styles.addButton}
          variant="contained"
          onClick={() => onAddComment()}
        >
          Отправить
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
