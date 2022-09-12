import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types";

type FormFieldProps = {
  name: string;
  label: string;
};

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      name={name}
      className="mb-25"
      variant="outlined"
      size="small"
      fullWidth
      label={label}
      error={!!formState.errors[name]?.message}
      // @ts-ignore
      helperText={
        formState.errors[name]?.message as Merge<
          FieldError,
          FieldErrorsImpl<DeepRequired<any>>
        >
      }
    />
  );
};

export default FormField;
