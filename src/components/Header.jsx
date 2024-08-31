const Header = ({ changeAccessLevel, accessLevel }) => {
	return (
		<header className="w-[90vw] max-w-[1200px] mx-auto grid grid-cols-3 text-center mt-10">
			<h1 className="col-start-2 text-4xl text-white font-medium">
				نوبت دهی آرایشگاه
			</h1>
			<button
				className="col-start-3 max-w-[150px] place-self-end bg-sky-600 py-2 px-3 text-white rounded"
				onClick={changeAccessLevel}
			>
				تغییر به {accessLevel}
			</button>
		</header>
	);
};

export default Header;
