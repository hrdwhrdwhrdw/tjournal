import React from "react";
import styles from "./Header.module.scss";
import { Paper, Button, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const Header: React.FC = () => {
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
        <div >
          <Button className={styles.createButton} variant="contained">
            <AddIcon />
            Создать
          </Button>
        </div>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
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
      </div>
    </Paper>
  );
};

export default Header;
