import React from 'react';

import ReactDOM from 'react-dom/client';

import reportWebVitals from './services/reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>Default</React.StrictMode>);

reportWebVitals();
