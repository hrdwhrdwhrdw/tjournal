import { Button } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MessageIcon from "@mui/icons-material/Message";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { text: "Лента", icon: <LocalFireDepartmentIcon />, path: "/" },
  { text: "Сообщения", icon: <MessageIcon />, path: "/messages" },
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
                  {obj.icon}
                  {obj.text}
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
