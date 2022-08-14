import React from "react";
import Input from "@mui/material/Input";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import { useState } from "react";
import { Api } from "../../utils/api/index";
import { PostItem } from "../../utils/api/types";
import { useRouter } from 'next/router';

const Editor = dynamic(() => import("../Editor").then((m: any) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: PostItem;
}

const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || "");
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      let obj = { title, body: blocks };
      if (!data) {
        let post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`)
      } else {
        let post = await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.log("Create post error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.titleField}
        placeholder="Заголовок"
        defaultValue={title}
        disableUnderline
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !blocks.length || !title}
        variant="contained"
        onClick={onAddPost}
      >
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </>
  );
};

export default WriteForm;
