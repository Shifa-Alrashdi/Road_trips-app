import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const AppContext = createContext();

const AppProvider = ({children}) => {
	const initialState = {
		roadTrips: [], // Array to store road trip data
		isAuthenticated: false, // Boolean to track user authentication status
		user: null, // Object to store user profile information
	};
	const [state, setState] = useState(initialState);

	return (
		<AppContext.Provider value={{state, setState}}>
			{children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export {AppContext, AppProvider};
