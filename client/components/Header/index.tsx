import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import AuthDialog from "../AuthDialog/AuthDialog";
import styles from "./Header.module.scss";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import { PostItem } from "../CommentItem.tsx/index";
import { Api } from "../../utils/api/index";
import { selectUserData } from '../../redux/users/userSlice';

const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(true);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e: any) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <svg viewBox="0 0 24 25" className={styles.logo}>
              <path fill="#E8A427" d="M0 19h8.5v6H0v-6z"></path>
              <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
              <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1.v6l-1-6z"></path>
            </svg>
          </a>
        </Link>
      </div>
      <div className={styles.searchBlock}>
        <div className={styles.input}>
          <SearchIcon />
          <input
            value={searchValue}
            type="text"
            placeholder="Поиск"
            onChange={handleChangeInput}
          />
          {posts.length > 0 && (
            <Paper className={styles.searchPopup}>
              <List>
                {posts.map((post) => (
                  <Link href={`/news/${post.id}`}>
                    <a>
                      <ListItem key={post.id}>
                        <ListItemButton>{post.title}</ListItemButton>
                      </ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
        </div>
        <div>
          <Link href="/write">
            <a>
              <Button className={styles.createButton} variant="contained">
                <AddIcon />
                Создать
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ExpandMoreIcon />
            </a>
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <PermIdentityIcon /> <b>Войти</b>
          </div>
        )}
      </div>
      <AuthDialog open={authVisible} onClose={closeAuthDialog} />
    </Paper>
  );
};

export default Header;
