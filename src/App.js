// src/App.js
import React from 'react';
import QuoteGenerator from './QuoteGenerator';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <h1>Simple Quote Generator App</h1>
      <QuoteGenerator />
    </div>
  );
};

export default App;
