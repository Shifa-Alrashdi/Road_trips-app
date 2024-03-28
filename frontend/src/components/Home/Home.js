import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
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
				<h1 className='navbar-brand text-warning'>HOME</h1>
				<p>Welcome to Road Trips Around the World, your gateway to unforgettable adventures! Our full-stack web application empowers you to explore and create road trips around the world with ease.</p>
				<p>Embark on a journey of discovery as you browse through a diverse range of road trip routes, each offering its own unique blend of breathtaking scenery, cultural experiences, and hidden gems waiting to be uncovered.</p>
				<p>Whether you&apos;re planning a solo adventure, a romantic getaway, or a family vacation, our platform provides the tools you need to plan your perfect road trip. From interactive maps and detailed itineraries to user reviews and recommendations, we&apos;ve got you covered every step of the way.</p>
				<p>Join our community of travelers, explorers, and adventure enthusiasts today, and start turning your road trip dreams into reality!.</p>
				<hr style={{borderTop: '1px solid white'}} />
			</div>
		</div>
		<footer className='bg-dark text-light text-center py-4' style={{borderTop: '10px solid #ffc107'}}>
			<p>&copy; 2024 Road Trips Around the World. All Rights Reserved.</p>
		</footer>
	</div>
);

export default Home;
