import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightAltIcon />
      </h3>
      {/* {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
       */}
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
};
