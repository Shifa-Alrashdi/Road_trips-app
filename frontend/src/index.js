// Import necessary libraries
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import {AppProvider} from './components/AppContext/AppContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Use createRoot to render your app
createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
);

