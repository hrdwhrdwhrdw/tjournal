import React from "react";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import styles from "./CreatePost.module.scss";

const CreatePostButton = () => {
  return (
    <Link href="/write">
      <a>
        <Button className={styles.createButton} variant="contained">
          <AddIcon />
          Создать
        </Button>
      </a>
    </Link>
  );
};

export default CreatePostButton;
