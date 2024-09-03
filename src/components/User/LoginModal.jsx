import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

import modalStyle from "../../helpers/js/modal-styles";

const LoginModal = ({ open, handleClose, nameRef, phoneRef, handleLogin }) => {
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle}>
				<div className="mt-3 flex flex-col justify-center gap-2">
					<input
						id="name-input"
						placeholder="نام"
						ref={nameRef}
						className="border-none bg-zinc-50 py-2 px-4 rounded-sm"
					/>
					<input
						id="phonenumber-input"
						placeholder="شماره تلفن"
						ref={phoneRef}
						className="border-none bg-zinc-50 py-2 px-4 rounded-sm"
					/>

					<div className="mt-3 flex flex-row justify-center gap-2">
						<Button
							onClick={() => {
								handleLogin();
								handleClose();
							}}
							className="w-[100px]"
							variant="contained"
						>
							ورود
						</Button>
						<Button
							className="w-[100px]"
							variant="contained"
							onClick={handleClose}
						>
							بستن
						</Button>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

export default LoginModal;
