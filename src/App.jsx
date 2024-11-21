// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssetList from './components/AssetList/AssetList';
import AssetPage from './pages/AssetPage/AssetPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetList />} />
        <Route path="/asset/:id" element={<AssetPage />} />
      </Routes>
    </Router>
  );
};

export default App;
