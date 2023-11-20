import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const frcTeams = [
  { label: "401" },
  { label: "2363" },
  { label: "422" },
  { label: "836" },
  { label: "622" },
  { label: "612" },
  { label: "9995" },
  { label: "9996" },
];

export default function TeamSelector() {
  return (
    <Autocomplete
      clearOnEscape
      options={frcTeams}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Team" />}
    />
  );
}
