import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { useAutoContext } from "./ContextProvider";

type bxprops = {
  lable: string;
  color: string;
  value: boolean;
};
export default function CustomCheckbox(props: bxprops) {
  const { auto, setAuto } = useAutoContext();
  return (
    <Box>
      <FormControlLabel
        label={props.lable}
        value={props.value}
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: props.color,
              },
            }}
            onChange={(event) =>
              setAuto({
                ...auto,
                Taxi: event.target.checked,
              })
            }
          />
        }
      />
    </Box>
  );
}
