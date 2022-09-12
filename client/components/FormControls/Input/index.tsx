import { TextField } from "@mui/material";
import clsx from "clsx";
import React from "react";
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types";
import styles from "./Input.module.scss";
import { useFormContext } from "react-hook-form";

interface CustomInputTypes {
  placeholder?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputTypes> = ({ name, placeholder }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      className={clsx(
        styles.input,
        !!formState.errors[name]?.message && styles.error
      )}
      name={name}
      placeholder={placeholder}
      size="small"
      fullWidth
      error={!!formState.errors[name]?.message}
      // @ts-ignore
      helperText={
        formState.errors[name]?.message as Merge<
          FieldError,
          FieldErrorsImpl<DeepRequired<any>>
        >
      }
      sx={{
        "& fieldset": { border: "none" },
      }}
    />
  );
};

export default CustomInput;
