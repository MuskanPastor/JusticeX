import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chatbot from './components/Chatbot';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col overflow-hidden">
        <Hero messages={messages} />
      </div>

      <Chatbot onSend={handleSendMessage} />
    </div>
  );
};

export default App;
