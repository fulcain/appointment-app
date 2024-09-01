import Button from "@mui/material/Button";

const Header = ({ changeAccessLevel, swtichButtonText }) => {
	return (
		<header className="w-[90vw] max-w-[1200px] mx-auto grid grid-cols-3 text-center mt-10">
			<h1 className="col-start-2 text-4xl text-white font-medium">
				نوبت دهی آرایشگاه
			</h1>
			<Button
				className="col-start-3 place-self-end text-white"
				onClick={changeAccessLevel}
				variant="outlined"
				size="medium"
			>
				تغییر به {swtichButtonText}
			</Button>
		</header>
	);
};

export default Header;
