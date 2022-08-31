import React from "react";
import InputLabel from "@mui/material/InputLabel";
import styles from "./Label.module.scss";

interface CustomLabelTypes {
  title: string;
}

const CustomLabel: React.FC<CustomLabelTypes> = ({ title }) => {
  return <InputLabel className={styles.label}>{title}</InputLabel>;
};

export default CustomLabel;
