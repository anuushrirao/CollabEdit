import React from 'react';
import './App.css';
import Editor from './component/Editor';
import Home from './component/Home';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/docs/:id"
            element={<Editor />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
