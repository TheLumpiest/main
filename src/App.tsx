import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { CounterButtons } from "./Counter";
import TeamSelector from "./TeamSelector";
import Chooser from "./Chooser";
import UseSwitchesBasic from "./CustomSwitch";
import { TextField } from "@mui/material";
import { MouseEvent } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

enum Alliance {
  RED,
  BLUE,
}

export default function App() {
  const [alliance, setAlliance] = React.useState(Alliance.RED);
  const ButtonComponent = () => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
      setAlliance(alliance == Alliance.RED ? Alliance.BLUE : Alliance.RED);
      // Do something
    };

    return (
      <button onClick={handleMouseEvent}>
        {" "}
        <UseSwitchesBasic />
      </button>
    );
  };
  return (
    <div
      className={`min-h-screen w-screen flex flex-col items-center
      ${alliance == Alliance.RED ? "bg-red-400" : "bg-blue-500"}`}
    >
      <div className="p-4 pt-10">
        <Typography variant="h4" component="h1" gutterBottom>
          Experimental Form
        </Typography>
        <div className="flex flex-row items-center justify-center">
          <div className="justify-center">Alliance</div>
          <UseSwitchesBasic />
          <ButtonComponent />
        </div>
        <TeamSelector />
        <Typography>Alliance</Typography>
        <Typography variant="h4"> Position</Typography>
        <Chooser value1="Red1" value2="Red2" value3="Red3" />
        <CounterButtons />
        <CounterButtons />
        <TextField
          id="outlined-textarea"
          label="Comments"
          placeholder="Null"
          multiline
        />
      </div>
    </div>
  );
}
