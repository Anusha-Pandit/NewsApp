import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.my_news_api
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={6} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={6} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={6} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
