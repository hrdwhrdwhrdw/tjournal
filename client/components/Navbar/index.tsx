import { Button } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { text: "Популярное", icon: <LocalFireDepartmentIcon />, path: "/" },
  { text: "Свежее", icon: <AccessTimeIcon />, path: "/new" },
  { text: "Моя лента", icon: <CreditScoreIcon />, path: "/my/new" },
  { text: "Закладки", icon: <BookmarkBorderIcon />, path: "/bookmarks" },
  { text: "Рейтинг RJ", icon: <TrendingUpIcon />, path: "/rating" },
  { text: "Подписки", icon: <ListIcon />, path: "/follows" },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button
                  variant={router.asPath === obj.path ? "contained" : "text"}
                >
                  <span
                    className={`d-flex align-center justify-center ${
                      router.asPath === obj.path && styles.active
                    }`}
                  >
                    {obj.icon}
                  </span>
                  <span>{obj.text}</span>
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
