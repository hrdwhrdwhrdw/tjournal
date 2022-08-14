import React from "react";
import styles from "./Post.module.scss";
import Image from "next/image";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import PostActions from "../PostActions";

type PostType = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

const Post: React.FC<PostType> = ({ id, title, description }) => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-15 mb-15">{description}</Typography>
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
