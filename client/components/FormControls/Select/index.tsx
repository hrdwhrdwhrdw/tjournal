import React, { ReactNode } from "react";
import styles from "./CustomSelect.module.scss";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface CustomSelectTypes {
  value: string;
  children: ReactNode;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

const CustomSelect: React.FC<CustomSelectTypes> = ({ value, children, onChange }) => {
  return (
    <Select className={styles.select} value={value} onChange={onChange}>
      {children}
    </Select>
  );
};

export default CustomSelect;
