import React, { useEffect, useState } from "react";
import { THEME } from "../util/helper";

const initialContext = {
	toggleTheme: () => {},
	theme: THEME.LIGHT,
};
const ThemeContext = React.createContext(initialContext);
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const lightTheme = () => {
		setTheme(THEME.LIGHT);
		saveTheme(THEME.LIGHT);
	};

	const darkTheme = () => {
		setTheme(THEME.DARK);
		saveTheme(THEME.DARK);
	};

	const saveTheme = (theme) => {
		localStorage.setItem("data-theme", theme);
		document.body.setAttribute("data-theme", theme);
	};
	const toggleTheme = () => {
		console.log("function call");
		if (theme == THEME.LIGHT) {
			darkTheme();
		} else {
			lightTheme();
		}
	};

	useEffect(() => {
		let savedTheme = localStorage.getItem("data-theme") || null;
		if (!savedTheme) {
			lightTheme();
			return;
		}
		if (savedTheme == THEME.DARK) {
			darkTheme();
			return;
		}
		if (savedTheme == THEME.LIGHT) {
			lightTheme();
			return;
		}
	}, []);
	return (
		<React.Fragment>
			<ThemeContext.Provider value={{ toggleTheme, theme, lightTheme, darkTheme }}>
				{children}
			</ThemeContext.Provider>
		</React.Fragment>
	);
}

export function useTheme() {
	return React.useContext(ThemeContext);
}

export default ThemeProvider;
