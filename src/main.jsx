import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SettingsProvider } from './context/SettingsContext.jsx';
import App from './App.jsx';
import 'antd/dist/antd.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <SettingsProvider>
      <Router>
        <App />
      </Router>
    </SettingsProvider>
  </Provider>
);
