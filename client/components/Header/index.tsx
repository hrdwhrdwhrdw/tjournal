import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, IconButton, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import AuthDialog from "../AuthDialog/AuthDialog";
import styles from "./Header.module.scss";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(true);
  const closeAuthDialog = () => {
    setAuthVisible(false);
  };
  const openAuthDialog = () => {
    setAuthVisible(true);
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
          <input type="text" placeholder="Поиск" />
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
        {/* <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ExpandMoreIcon />
          </a>
        </Link> */}
        <div className={styles.loginButton} onClick={openAuthDialog}>
          <PermIdentityIcon /> <b>Войти</b>
        </div>
      </div>
      <AuthDialog open={authVisible} onClose={closeAuthDialog} />
    </Paper>
  );
};

export default Header;
