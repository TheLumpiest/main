import {
  Color,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

type chsrProps = {
  title?: string | JSX.Element | number;
  value1: string | JSX.Element | number;
  value2: string | JSX.Element | number;
  value3?: string | JSX.Element | number;
  value4?: string | JSX.Element | number;
  value5?: string | JSX.Element | number;
  value6?: string | JSX.Element | number;
  color?: string;
};

export default function Chooser(props: chsrProps) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.value1}
        name="radio-buttons-group"
        color={props.color}
      >
        <FormControlLabel
          value={props.value1}
          control={<Radio />}
          label={props.value1}
        />
        <FormControlLabel
          value={props.value2}
          control={<Radio />}
          label={props.value2}
        />
        <FormControlLabel
          value={props.value3}
          control={<Radio />}
          label={props.value3}
        />
      </RadioGroup>
    </FormControl>
  );
}
