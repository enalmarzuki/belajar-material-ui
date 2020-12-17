import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, options } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((option, i) => (
          <MenuItem key={i} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
