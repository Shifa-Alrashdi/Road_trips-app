import React, {useState, useEffect, useContext} from 'react';
import {fetchUserProfile} from '../api';
import {AppContext} from '../AppContext/AppContext';

const UserProfile = () => {
	const {user} = useContext(AppContext);
	const [_profile, setProfile] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userProfile = await fetchUserProfile();
				setProfile(userProfile);
			} catch (error) {
				console.error(error);
				// Handle error
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>User Profile</h1>
			<p>Welcome, {user.name}!</p>
			<p>Email: {user.email}</p>
			<p>This is the user&apos;s profile page.</p>
		</div>
	);
};

export default UserProfile;
