import styles from "./CommentItem.module.scss";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { OutputData } from "@editorjs/editorjs";
import { ResponseUser } from "../../redux/auth/types";

export type PostItem = {
  body: OutputData["blocks"];
  title: string;
  id: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  user?: ResponseUser;
  commentsCount?: number;
};

export interface CommentItemProps {
  user: ResponseUser;
  text: string;
  post: PostItem;
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }} src={`/static/${user.imageUrl}`}>
          {!user.imageUrl && user.fullName[0]}
        </Avatar>
        <Link href={`/user/${user.id}`}>
          <a>
            <b>{user.fullName}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${post?.id}`}>
        <a>
          <span className={styles.postTitle}>{post?.title}</span>
        </a>
      </Link>
    </div>
  );
};
