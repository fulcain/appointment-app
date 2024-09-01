import "./css-reset.css";
import "./assest/font/fontiran.css";
import { useState } from "react";
import Header from "./components/Header";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";

// Idea:

/*
 * Have two main components for the user and admin and be able to switch between them using a button
 * The user has to enter their name and phonenumber and this data will be saved in the DB
 * After switching to the admin view using the button, the admin will be able to see all the appointments
 * Admin can pick available dates for the user to pick from and the available dates will be granted to the user
 * In a page with different boxes
 * User can select a date and see all the available hours in it (dofxo)
 * The picked dates by a user will change colors indicating that is picked
 * */
const App = () => {
	const AdminText = "ادمین";
	const UserText = "کاربر";

	const [swtichButtonText, setSwitchButtonText] = useState(AdminText);

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
			currentAccessLevel === AdminText ? UserText : AdminText
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
