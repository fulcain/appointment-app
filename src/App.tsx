import { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
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
import Authentication from "./components/Authentication";

import "react-toastify/dist/ReactToastify.min.css";

import "./css-reset.css";
import useLocalStorage from "./helpers/js/useLocalStorage";
import { supabase } from "./utils/supabase";
import { User } from "@supabase/supabase-js";

const App = () => {
  const navigate = useNavigate();

  const [userIsLogin, setUserIsLogin] = useLocalStorage("userIsLogin");
  const [user, setUser] = useState<User | undefined>();

  // modal related states
  const [open, setOpen] = useState(true);
  const [currentAccessLevel, setCurrentAccessLevel] = useState("admin");

  useEffect(() => {
    (async () => {
      const { data: user } = await supabase.auth.getUser();

      if (user.user) setUserIsLogin(true);
      else setUserIsLogin(false);
    })();
  }, [userIsLogin]);

  const handleHeaderLoginButton = async () => {
    if (!userIsLogin) {
      setOpen(true);
    } else {
      setUserIsLogin(false);
      await supabase.auth.signOut();
      setUser({} as User);

      navigate("/auth");
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

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
            user: user as User,
            setUser,
            handleHeaderLoginButton,
          }}
        >
          <ToastContainer position="top-right" rtl={true} theme="colored" />
          <Header />
          <Routes>
            <Route path="/appointment-app" element={<Navigate to="/auth" />} />
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route
              path="/auth"
              element={<Authentication open={open} handleClose={handleClose} />}
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
