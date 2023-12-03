// src/QuoteGenerator.js
import React, { useState } from 'react';

const quotesData = [
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotesData[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <blockquote>
        <p>{quote.quote}</p>
        <footer>{quote.author}</footer>
      </blockquote>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default QuoteGenerator;
