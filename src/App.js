import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import Dashboard from './component/dashboard/Dashboard';
// import ProductPage from './component/product/ProductPage';
import './App.css';
// import AddProsuct from './component/myStore/AddProsuct';
// import { List } from '@mui/material';
import ListProduct from './component/myStore/ListProduct';
import AddProduct from './component/myStore/AddProduct';
import User from './component/user/User';

const App = () => {
  return (
    <Router>
      <div className="App flex">
        <Sidebar />
        <section id="content" className="flex-1 ml-64">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/user" element={<User/>} />
            {/* Add other routes here */}
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
