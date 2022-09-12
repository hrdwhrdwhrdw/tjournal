import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectAuthData } from "../../redux/auth/authSlice";
import { Api } from "../../utils/api/index";
import AuthDialog from "../AuthDialog/AuthDialog";
import AvatarPopup from "../AvatarPopup";
import { PostItem } from "../CommentItem.tsx/index";
import CreatePostButton from "../CreatePost/index";
import MessagesPopup from "../MessagesPopup/index";
import styles from "./Header.module.scss";
import NotificationsPopup from "../NotificationsPopup/index";
import clsx from "clsx";
import { useRef } from "react";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";

const Header: React.FC = () => {
  const user = useAppSelector(selectAuthData);
  const [authVisible, setAuthVisible] = useState(true);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPopup, setCurrentPopup] = useState("");
  const ref = useRef(null);
  const { isPopup, setIsPopup } = useOutsideClickHandler(ref);

  const onNotificationsClick = (type: string) => {
    if (currentPopup === type) {
      setCurrentPopup("");
      setIsPopup(false);
    } else {
      setCurrentPopup(type);
      setIsPopup(true);
    }
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  useEffect(() => {
    if (authVisible && user) {
      setAuthVisible(false);
    }
  }, [authVisible, user]);

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
    <Paper classes={{ root: styles.root }} elevation={0}>
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
          <CreatePostButton />
        </div>
      </div>
      <div className="d-flex align-center">
        <div
          className={clsx(
            styles.notificationsWrapper,
            currentPopup === "messages" && isPopup && styles.active
          )}
          ref={ref}
        >
          <IconButton
            className={clsx(
              styles.notificationBtn,
              currentPopup === "messages" && isPopup && styles.activeIcon
            )}
            onClick={() => onNotificationsClick("messages")}
            disableRipple
          >
            <svg
              data-v-383ef8ac=""
              data-v-d4ebc8c2=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              aria-labelledby="messenger-panel"
              role="presentation"
              className={styles.notificationIcon}
            >
              <g data-v-383ef8ac="" fill="currentColor">
                <g data-v-d4ebc8c2="" data-v-383ef8ac="">
                  <path d="M8.74967 11.0833C7.94426 11.0833 7.29134 11.7363 7.29134 12.5417C7.29134 13.3471 7.94426 14 8.74967 14C9.55509 14 10.208 13.3471 10.208 12.5417C10.208 11.7363 9.55509 11.0833 8.74967 11.0833Z"></path>{" "}
                  <path d="M12.5413 12.5417C12.5413 11.7363 13.1943 11.0833 13.9997 11.0833C14.8051 11.0833 15.458 11.7363 15.458 12.5417C15.458 13.3471 14.8051 14 13.9997 14C13.1943 14 12.5413 13.3471 12.5413 12.5417Z"></path>{" "}
                  <path d="M19.2497 11.0833C18.4443 11.0833 17.7913 11.7363 17.7913 12.5417C17.7913 13.3471 18.4443 14 19.2497 14C20.0551 14 20.708 13.3471 20.708 12.5417C20.708 11.7363 20.0551 11.0833 19.2497 11.0833Z"></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.99967 3.5C4.42235 3.5 2.33301 5.58934 2.33301 8.16667V22.0726C2.33301 24.0291 4.59618 25.1169 6.12396 23.8946L9.74225 21H20.9997C23.577 21 25.6663 18.9107 25.6663 16.3333V8.16667C25.6663 5.58934 23.577 3.5 20.9997 3.5H6.99967ZM4.66634 8.16667C4.66634 6.878 5.71101 5.83333 6.99967 5.83333H20.9997C22.2883 5.83333 23.333 6.878 23.333 8.16667V16.3333C23.333 17.622 22.2883 18.6667 20.9997 18.6667H9.33301C9.06809 18.6667 8.81106 18.7568 8.6042 18.9223L4.66634 22.0726V8.16667Z"
                  ></path>
                </g>
              </g>
            </svg>
          </IconButton>
          {currentPopup === "messages" && isPopup && <MessagesPopup />}
        </div>
        <div
          className={clsx(
            styles.notificationsWrapper,
            currentPopup === "notifications" && isPopup && styles.active
          )}
          ref={ref}
        >
          <IconButton
            className={clsx(
              styles.notificationBtn,
              currentPopup === "notifications" && isPopup && styles.activeIcon
            )}
            disableRipple
            onClick={() => onNotificationsClick("notifications")}
          >
            <NotificationsNone className={styles.notificationIcon} />
          </IconButton>
          {currentPopup === "notifications" && isPopup && (
            <NotificationsPopup />
          )}
        </div>
        {user ? (
          <AvatarPopup user={user} />
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
