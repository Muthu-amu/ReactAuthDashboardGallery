import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PhotoGallery from './pages/PhotoGallery.jsx';
import Portfolio from './pages/Portfolio.jsx';
import AccountSettings from "./pages/AccountSettings.jsx";
import Header from './components/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/photo-gallery" element={<PrivateRoute><PhotoGallery /></PrivateRoute>} />
        <Route path="/portfolio" element={<PrivateRoute><Portfolio /></PrivateRoute>} />
        <Route path="/account-settings" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />
      </Routes>
    </>
  );
};

export default App;
