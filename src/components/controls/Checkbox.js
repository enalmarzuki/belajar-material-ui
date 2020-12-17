import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventPara(name, e.target.checked))
            }
          />
        }
      />
    </FormControl>
  );
}
