import "./css-reset.css";
import "./assest/font/fontiran.css";
import "./helpers/css/mui-classes.css";
import { useState } from "react";
import Header from "./components/Header";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";

const App = () => {
	const AdminText = "ادمین";
	const UserText = "کاربر";

	const [swtichButtonText, setSwitchButtonText] = useState(UserText);
	console.log(swtichButtonText);

	const [currentAccessLevel, setCurrentAccessLevel] = useState(AdminText);

	const pageToShow = {
		[AdminText]: <AdminPage/>,
		[UserText]: <UserPage/>
	}

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
			/>

			{pageToShow[currentAccessLevel]}
		</>
	);
};

export default App;
