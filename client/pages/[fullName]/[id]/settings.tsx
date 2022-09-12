import BlockIcon from "@mui/icons-material/Block";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import MainSettingForm from "../../../components/SettingsForm/Main";
import ProfileSettingsForm from "../../../components/SettingsForm/Profile";
import { MainLayout } from "../../../layouts/MainLayout";
import styles from "./Settings.module.scss";
import NotificationsSetting from '../../../components/SettingsForm/Notifications/index';
import BlackListSettings from '../../../components/SettingsForm/Blacklist/index';

const Settings: React.FC = () => {
  const popupLinks = [
    {
      title: "Профиль",
      link: `/profile/`,
      element: <PermIdentityIcon />,
    },
    {
      title: "Основные",
      link: "",
      element: <SettingsIcon />,
    },
    {
      title: "Уведомления",
      link: "",
      element: <NotificationsNone />,
    },
    {
      title: "Черный список",
      link: "",
      element: <BlockIcon />,
    },
  ];

  const [navItem, setNavItem] = useState(0);

  return (
    <MainLayout hideComments contentFullWidth>
      <div className={styles.settingsWrapper}>
        <Paper className={styles.settingsMain} elevation={0}>
          {navItem === 0 && <MainSettingForm />}
          {navItem === 1 && <ProfileSettingsForm />}
          {navItem === 2 && <NotificationsSetting />}
          {navItem === 3 && <BlackListSettings />}
        </Paper>
        <Paper elevation={0} className={styles.settingsMenu}>
          <span>Настройки</span>
          {popupLinks.map((obj, idx) => (
            <Button
              className={styles.popupLink}
              onClick={() => setNavItem(idx)}
              disableRipple
            >
              {obj.element}
              {obj.title}
            </Button>
          ))}
        </Paper>
      </div>
    </MainLayout>
  );
};

export default Settings;
