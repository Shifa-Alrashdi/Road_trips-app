// AddRoadTripForm.js
import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {Link} from 'react-router-dom';

function AddRoadTripForm({addRoadTrip}) {
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		// Add other form fields here
	});

	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		addRoadTrip(formData);
		setSuccessMessage('Road trip added successfully!');
		// Reset form fields
		setFormData({
			name: '',
			description: '',
			// Reset other form fields here
		});
	};

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
					<h1 className='display-4 navbar-brand text-warning'>Road Trip Form</h1>
					<hr style={{borderTop: '1px solid white'}} />
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Road Trip Name'
							value={formData.name}
							onChange={handleChange}
						/>
						<hr style={{borderTop: '1px solid white'}} />
						<textarea
							name='description'
							placeholder='Description'
							value={formData.description}
							onChange={handleChange}
						/>
						<hr style={{borderTop: '1px solid white'}} />
						<button className='btn btn-outline-warning my-2 my-sm-0' type='submit'>Add Road Trip</button>
						<hr style={{borderTop: '1px solid white'}} />
						{successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
					</form>
					<hr style={{borderTop: '1px solid white'}} />
				</div>
			</div>
			<footer className='bg-dark text-light text-center py-4' style={{borderTop: '10px solid #ffc107'}}>
				<p>&copy; 2024 Road Trips Around the World. All Rights Reserved.</p>
			</footer>
		</div>

	);
}

AddRoadTripForm.propTypes = {
	addRoadTrip: PropTypes.func.isRequired, // Validate addRoadTrip prop as a required function
};

export default AddRoadTripForm;
