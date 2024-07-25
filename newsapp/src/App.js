import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import NavBar from './comp/NavBar';
import News from './comp/News';
import Mp from './comp/Mp';
import Business from './comp/Business';
import Technology from './comp/Technology';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/mp" element={<Mp />} />
            <Route path="/business" element={<Business />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
