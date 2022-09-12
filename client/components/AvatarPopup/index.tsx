import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Paper } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { ResponseUser } from "../../redux/auth/types";
import styles from "./AvatarPopup.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AvatarPopupTypes {
  user: ResponseUser;
}

const AvatarPopup: React.FC<AvatarPopupTypes> = ({ user }) => {
  const ref = useRef(null);
  const { isPopup, setIsPopup } = useOutsideClickHandler(ref);

  const { events } = useRouter();

  const close = () => {
    setIsPopup(false);
  };

  useEffect(() => {
    events.on("routeChangeStart", close);
    return () => {
      events.off("routeChangeStart", close);
    };
  }, [close, events]);

  const fullName = user.fullName.toLowerCase().split(" ").join("-");

  const popupLinks = [
    {
      title: "Создать блог",
      path: `/profile/${user.id}`,
      element: <PermIdentityIcon />,
    },
    { title: "Создать сообщество", path: "", element: <PeopleOutlineIcon /> },
    { title: "Черновики", path: "", element: <DriveFileRenameOutlineIcon /> },
    { title: "Донаты", path: "", element: <CurrencyRubleIcon /> },
    {
      title: "Настройки",
      path: `/${fullName}/${user.id}/settings`,
      element: <SettingsIcon />,
    },
    { title: "Выйти", path: "", element: <LogoutIcon /> },
  ];

  return (
    <>
      <div className={styles.root} ref={ref}>
        <Link href={`/${fullName}/${user.id}`}>
          <a className="d-flex align-center">
            <Avatar alt="Remy Sharp" src={`/static/${user.imageUrl}`}>
              {!user.imageUrl && user.fullName[0]}
            </Avatar>
          </a>
        </Link>
        <ExpandMoreIcon
          onClick={() => setIsPopup(!isPopup)}
          className={isPopup && styles.rotate}
        />
        {isPopup && (
          <div className={styles.popupWrapper}>
            <Paper elevation={0} className="p-20 d-flex flex-column">
              <span style={{ fontSize: 14, fontWeight: 500 }}>Мой профиль</span>
              <Link href={`/${user.fullName}/${user.id}`}>
                <a className={styles.popupLink}>
                  <Avatar src={`/static/${user.imageUrl}`} />
                  <span className="ml-10">{user.fullName}</span>
                </a>
              </Link>
              {popupLinks.map((obj) => (
                <Link href={obj.path}>
                  <a className={styles.popupLink}>
                    {obj.element} <span>{obj.title}</span>
                  </a>
                </Link>
              ))}
            </Paper>
          </div>
        )}
      </div>
    </>
  );
};

export default AvatarPopup;
