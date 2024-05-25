import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';
import { SettingsProvider } from './context/SettingsContext.jsx';
import App from './App.jsx';
// import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider>
      <Router>
        <App />
      </Router>
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
);

