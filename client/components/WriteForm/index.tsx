import React from "react";
import Input from "@mui/material/Input";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Button } from '@mui/material';

const Editor = dynamic(() => import("../Editor").then((m: any) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <>
      <Input
        className={styles.titleField}
        placeholder="Заголовок"
        defaultValue={title}
        disableUnderline
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained">
        Опубликовать
      </Button>
    </>
  );
};

export default WriteForm;
