import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const addRoadTrip = async roadTripData => {
	try {
		const response = await api.post('/api/roadTrips', roadTripData);
		return response.data;
	} catch (error) {
		console.error('Error adding road trip:', error);
		throw error;
	}
};

const fetchRoadTrips = async (id = null) => {
	try {
		const url = id ? `/api/roadTrips/${id}` : '/api/roadTrips';
		const response = await api.get(url);
		return response.data;
	} catch (error) {
		console.error('Error fetching road trips:', error);
		return null;
	}
};

export {fetchRoadTrips};

export const fetchUserProfile = async () => {
	try {
		const response = await api.get('/users/profile');
		return response.data;
	} catch (error) {
		console.error('Error fetching user profile:', error);
		throw error;
	}
};
