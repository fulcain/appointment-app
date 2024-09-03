import "./css-reset.css";
import "./assest/font/fontiran.css";
import "./helpers/css/mui-classes.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";

const App = () => {
	const AdminText = "ادمین";
	const UserText = "کاربر";

	const nameRef = useRef({});
	const phoneRef = useRef({});

	const [currentUserName, setCurrentUserName] = useState(null);
	const [currentUserPhoneNumber, setCurrentUserPhoneNumber] = useState(null);

	const [userIsLogin, setUserIsLogin] = useState(false);

	const [swtichButtonText, setSwitchButtonText] = useState(UserText);

	const [currentAccessLevel, setCurrentAccessLevel] = useState(AdminText);

	const pageToShow = {
		[AdminText]: <AdminPage />,
		[UserText]: (
			<UserPage
				currentUserName={currentUserName}
				currentUserPhoneNumber={currentUserPhoneNumber}
				userIsLogin={userIsLogin}
			/>
		),
	};

	const changeAccessLevel = () => {
		setCurrentAccessLevel((prev) =>
			prev === UserText ? AdminText : UserText
		);

		setSwitchButtonText(
			swtichButtonText === AdminText ? UserText : AdminText
		);
	};

	return (
		<>
			<Header
				changeAccessLevel={changeAccessLevel}
				swtichButtonText={swtichButtonText}
				currentAccessLevel={currentAccessLevel}
				nameRef={nameRef}
				phoneRef={phoneRef}
				userIsLogin={userIsLogin}
				setUserIsLogin={setUserIsLogin}
				setCurrentUserName={setCurrentUserName}
				setCurrentUserPhoneNumber={setCurrentUserPhoneNumber}
			/>

			{pageToShow[currentAccessLevel]}
		</>
	);
};

export default App;
