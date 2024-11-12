import { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import theme from "./layouts/themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Header from "./components/Header";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";
import ApointmentContext from "./context/ApointmentContext";
import Login from "./components/Login";

import "react-toastify/dist/ReactToastify.min.css";

import "./css-reset.css";
import useLocalStorage from "./helpers/js/useLocalStorage";

const App = () => {
  const navigate = useNavigate();

  const [currentUserName, setCurrentUserName] =
    useLocalStorage("currentUserName");
  const [currentUserPhoneNumber, setCurrentUserPhoneNumber] = useLocalStorage(
    "currentUserPhoneNumber",
  );

  const [userIsLogin, setUserIsLogin] = useLocalStorage("userIsLogin");

  // modal related states
  const [open, setOpen] = useState(true);
  const [currentAccessLevel, setCurrentAccessLevel] = useState("admin");

  const handleHeaderLoginButton = () => {
    if (!userIsLogin) {
      setOpen(true);
    } else {
      setUserIsLogin(false);

      setCurrentUserName(undefined);
      setCurrentUserPhoneNumber(undefined);

      navigate("/auth");
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!userIsLogin) navigate("/auth");
  }, []);

  // RTL chache
  const cacheRTL = createCache({
    key: "muirtl",
    // eslint-disable-next-line
    // @ts-ignore
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <ApointmentContext.Provider
          value={{
            currentAccessLevel,
            setCurrentAccessLevel,
            userIsLogin,
            setUserIsLogin,
            setCurrentUserName,
            setCurrentUserPhoneNumber,
            currentUserName,
            currentUserPhoneNumber,
            handleHeaderLoginButton,
          }}
        >
          <ToastContainer position="top-right" rtl={true} theme="colored" />
          <Header />
          <Routes>
            <Route
              path="/auth"
              element={<Login open={open} handleClose={handleClose} />}
            />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </ApointmentContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
