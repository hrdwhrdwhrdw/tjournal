import styles from "./CommentItem.module.scss";
import { Avatar } from "@mui/material";
import Link from 'next/link';

export type ResponseUser = {
  fullName: string;
  avatar: string;
  id: number
};

export type PostItem = {
  title: string;
  id: number
};
interface CommentItemProps {
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
        <Avatar
          style={{ marginRight: 10 }}
          src="https://leonardo.osnova.io/f0a508c7-b6df-5e3a-9108-cbbbd4bf3cd6/-/scale_crop/64x64/-/format/webp/"
        />
        <Link href={`/user/${user.id}`}>
        <a>
          <b>{user.fullName}</b>
        </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${post.id}`}>
      <a>
        <span className={styles.postTitle}>{post.title}</span>
      </a>
      </Link>
    </div>
  );
};
