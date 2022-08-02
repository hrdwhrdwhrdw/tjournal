import React from "react";
import styles from "./AddCommentForm.module.scss";
import Input from "@mui/material/Input";
import { useState } from "react";
import { Button } from "@mui/material";

interface AddCommentFormTypes {}

const AddCommentForm: React.FC<AddCommentFormTypes> = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState("");
  const onAddComment = () => {
    setIsClicked(false);
    setText("");
  };
  return (
    <div className={styles.form}>
      <Input
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
