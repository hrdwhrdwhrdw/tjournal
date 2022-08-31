import React from "react";
import { Input } from "@mui/material";
import styles from "./Input.module.scss";

interface CustomInputTypes {
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputTypes> = ({ placeholder }) => {
  return (
    <Input
      className={styles.input}
      size="small"
      fullWidth
      required
      disableUnderline
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
