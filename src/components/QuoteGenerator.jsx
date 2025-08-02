import React, { useState } from "react";

export default function QuoteGenerator() {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
  ];

  const [quote, setQuote] = useState(
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  );

  function generateQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        color: "yellow",
        borderRadius: "15px",
        backgroundColor: "black",
        padding:"20px",
        width:"400px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <div>
        <h1 style={{ color: "#007bff" }}>Random Quote Generator</h1>
      </div>
      <p>{quote}</p>
      <button onClick={generateQuote} style={{ borderRadius: "15px", backgroundColor:"blueviolet" }}>
        Generate Random Quote
      </button>
    </div>
  );
}
