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

  return (
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
  );
};

export default App;
