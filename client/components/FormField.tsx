import React, { ReactNode } from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

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
      helperText={formState.errors[name]?.message as ReactNode}
    />
  );
};

export default FormField;
