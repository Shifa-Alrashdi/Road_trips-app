import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {fetchRoadTrips} from '../api'; // Import the fetchRoadTrips function

const RoadTripDetails = () => {
	const {id} = useParams();
	const [roadTrip, setRoadTrip] = useState(null);

	useEffect(() => {
		const getRoadTripDetails = async () => {
			const roadTrip = await fetchRoadTrips(id);
			setRoadTrip(roadTrip);
		};

		getRoadTripDetails();
	}, [id]);

	if (!roadTrip) {
		return (
			<div className='d-flex flex-column min-vh-100'>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container'>
						<a className='navbar-brand text-warning' href='#'>Road Trips Around the World</a>
						<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNav'>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<Link to='/home' className='nav-link' href='#'>Home</Link>
								</li>
								<li className='nav-item'>
									<Link to='/profile' className='nav-link' href='#'>Profile</Link>
								</li>
								<li className='nav-item'>
									<Link to='/road-trip/123' className='nav-link' href='#'>View Road Trip Details</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className='container flex-grow-1'>
					<div className='col-12'>
						<hr style={{borderTop: '1px solid white'}} />
						<h1 className='display-4 navbar-brand text-warning'>Road Trip Details</h1>
						<hr style={{borderTop: '1px solid white'}} />
						<p>No road trips available yet. Start planning your adventure today!</p>
						<Link to='/road-trip/123/add' className='btn btn-outline-warning my-2 my-sm-0'>Add Road Trip</Link>
						<hr style={{borderTop: '1px solid white'}} />
					</div>
				</div>
				<footer className='bg-dark text-light text-center py-4' style={{borderTop: '10px solid #ffc107'}}>
					<p>&copy; 2024 Road Trips Around the World. All Rights Reserved.</p>
				</footer>
			</div>
		);
	}

	return (
		<div className='d-flex flex-column min-vh-100'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container'>
					<a className='navbar-brand text-warning' href='#'>Road Trips Around the World</a>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to='/home' className='nav-link' href='#'>Home</Link>
							</li>
							<li className='nav-item'>
								<Link to='/profile' className='nav-link' href='#'>Profile</Link>
							</li>
							<li className='nav-item'>
								<Link to='/road-trip/123' className='nav-link' href='#'>View Road Trip Details</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container flex-grow-1'>
				<div className='col-12'>
					<hr style={{borderTop: '1px solid white'}} />
					<h1 className='navbar-brand text-warning'>Road Trip Details</h1>
					<p>Name: {roadTrip.name}</p>
					<p>Description: {roadTrip.description}</p>
					<hr style={{borderTop: '1px solid white'}} />
				</div>
			</div>
			<footer className='bg-dark text-light text-center py-4' style={{borderTop: '10px solid #ffc107'}}>
				<p>&copy; 2024 Road Trips Around the World. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default RoadTripDetails;
