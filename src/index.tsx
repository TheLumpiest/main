import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ContextProvider } from './ContextProvider';
// import SettingsForm from './Forms/SettingsForm';
// import PreMatchForm from './Forms/PreMatchForm';
import AutonomousForm from './Forms/AutonomousForm';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="auto" element={<AutonomousForm />} />
    </Route>
  )
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
