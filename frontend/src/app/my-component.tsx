"use client";
// import-me: 7
import React, { useState } from 'react';
const QuerySender: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAnswer("Thinking...")
    const response = await fetch('https://s172-31-8-94p10045.lab-aws-production.deeplearning.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log('Response from the server:', data);
    setAnswer(data.response);
  }

  // Function to update the state with the input value
  const handleChange = (e) => {
    setQuery(e.target.value);
  };  

  return (
    <div>
      <h1>Ask a question</h1>
      <form onSubmit={handleSubmit}>
        <input id="query" type="text" value={query} onChange={handleChange} />
        <button type="submit">Query</button>
      </form>
      <div id="answer">{answer}</div>
    </div>
  );
};

export default QuerySender;
