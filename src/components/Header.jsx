import Button from "@mui/material/Button";
import { useState } from "react";
import LoginModal from "./User/LoginModal";

const Header = ({
	changeAccessLevel,
	swtichButtonText,
	currentAccessLevel,
	nameRef,
	phoneRef,
	userIsLogin,
	setUserIsLogin,
	setCurrentUserName,
	setCurrentUserPhoneNumber
}) => {
	// modal related states
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		if(!userIsLogin){
			setOpen(true);
		} else {
			setUserIsLogin(false)
		}
	};

	const handleClose = () => setOpen(false);

	const handleLogin = () => {
		setCurrentUserPhoneNumber(phoneRef.current.value);
		setCurrentUserName(nameRef.current.value);

		setUserIsLogin(true);
	};

	return (
		<header className="w-[90vw] max-w-[1200px] mx-auto grid grid-cols-3 text-center mt-10">
			<h1 className="col-start-2 text-4xl text-white font-medium">
				نوبت دهی 
			</h1>
			<div className="flex flex-row gap-2 place-self-end">
				{currentAccessLevel === "کاربر" && (
					<Button onClick={handleOpen} variant="outlined">
						{userIsLogin ? "خروج" : "ورود"}
					</Button>
				)}
				<Button
					className="col-start-3 text-white"
					onClick={changeAccessLevel}
					variant="outlined"
					size="medium"
				>
					تغییر به {swtichButtonText}
				</Button>
				<LoginModal
					nameRef={nameRef}
					phoneRef={phoneRef}
					handleClose={handleClose}
					open={open}
					handleLogin={handleLogin}
				/>
			</div>
		</header>
	);
};

export default Header;
