import "./css-reset.css";
import "./assest/font/fontiran.css";
import "./helpers/css/mui-classes.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";
import ApointmentContext from "./context/ApointmentContext";
import { useNavigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import theme from "./components/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const navigate = useNavigate();

  // const nameRef = useRef<HTMLInputElement>(null); for reference

  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserPhoneNumber, setCurrentUserPhoneNumber] = useState(null);

  const [userIsLogin, setUserIsLogin] = useState(false);

  const [currentAccessLevel, setCurrentAccessLevel] = useState("admin");

  // modal related states
  const [open, setOpen] = useState(true);

  const handleHeaderLoginButton = () => {
    if (!userIsLogin) {
      setOpen(true);
    } else {
      setUserIsLogin(false);
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
