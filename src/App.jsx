import './css-reset.css';
import './assest/font/fontiran.css';
import { useState } from 'react';
import Header from './components/Header';

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
	const [currentAccessLevel, setCurrentAccessLevel] = useState('کاربر');

	const changeAccessLevel = () =>{
		setCurrentAccessLevel(prev => (prev === 'کاربر' ? 'ادمین': 'کاربر'))
	}
	return (
	<Header accessLevel={currentAccessLevel} changeAccessLevel={changeAccessLevel}/>
	);
};

export default App;
