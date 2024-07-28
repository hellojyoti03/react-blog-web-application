import React, { useState } from "react";
import Modal from "react-modal";
//Modal.setAppElement("#root");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
const authContext = React.createContext(null);
function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState("");
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	const login = (user) => {};
	const logout = () => {};

	return (
		<React.Fragment value={{ isLoggedIn, user, token, login, logout }}>
			{children}
			<Modal
				isOpen={false}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal">
				<div className="screen">
					<div className="screen__content">
						<form className="login">
							<div className="login__field">
								<i className="login__icon fas fa-user"></i>
								<input type="text" className="login__input" placeholder="User name / Email" />
							</div>
							<div className="login__field">
								<i className="login__icon fas fa-lock"></i>
								<input type="password" className="login__input" placeholder="Password" />
							</div>
							<button className="button login__submit">
								<span className="button__text">Log In Now</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>
						</form>
					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</Modal>
		</React.Fragment>
	);
}

export function useAuth() {
	return React.useContext(authContext);
}

export default AuthProvider;
