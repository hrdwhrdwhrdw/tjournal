import React from "react";
import styles from "./Post.module.scss";
import Image from "next/image";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import PostActions from "../PostActions";

const Post: React.FC = () => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test123">
          <a>Ох, блин... Чуть-чуть про Польшу</a>
        </Link>
      </Typography>
      <Typography className="mt-15 mb-15">
        Что-то тут активизировались статьи от людей, убивающих белорусских
        лосей. Статьи, полные клюквы, хреновых фото и бесполезной информации.
        Поэтому я решил вмешаться и разбавить своей дерьмовой информацией.
      </Typography>
      <Image
        height={500}
        width={640}
        src="https://leonardo.osnova.io/c299ca58-4d5b-5944-91bd-2588e06f6e66/-/preview/1100/-/format/webp/
"
      />
      <div>
        <PostActions />
      </div>
    </Paper>
  );
};

export default Post;
