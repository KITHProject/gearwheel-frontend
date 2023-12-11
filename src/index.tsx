import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";
import {
  createBrowserRouter,
  Link,
  NavLink,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import AdminPanel from "./pages/AdminPanel";
import Products from "./pages/Products";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
  </React.StrictMode>
);
