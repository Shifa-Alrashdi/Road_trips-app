import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import UserProfile from './UserProfile/UserProfile';
import RoadTripDetails from './RoadTripDetails/RoadTripDetails';
import AddRoadTripForm from './AddRoadTripForm/AddRoadTripForm';
import {AppProvider} from './AppContext/AppContext';

function App() {
	const [roadTrips, setRoadTrips] = useState([]);
	const addRoadTrip = newRoadTrip => {
		setRoadTrips([...roadTrips, newRoadTrip]);
	};

	return (
		<AppProvider value={{roadTrips, addRoadTrip}}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/profile' element={<UserProfile />} />
					<Route path='/road-trip/:id' element={<RoadTripDetails />} />
					<Route path='/road-trip/:id/add' element={<AddRoadTripForm addRoadTrip={addRoadTrip} />} />
				</Routes>
			</Router>
		</AppProvider>
	);
}

export default App;
