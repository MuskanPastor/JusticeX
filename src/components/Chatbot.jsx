
import React, { useState } from 'react';

const Chatbot = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput(''); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSend();   
    }
  };

  const handleImageUpload = () => {
    alert('Image upload functionality will be added here.');
  };

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex fixed bottom-0 left-0 right-0">
      <button
        onClick={handleImageUpload}
        className="bg-gray-300 p-2 rounded-l-lg border border-gray-300"
      >
        📷
      </button>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything about the Indian justice system..."
        className="flex-grow border border-gray-300 p-2 resize-none h-20"
      />

      <button onClick={handleSend} className="bg-black text-white px-4 rounded-r-lg">
        Send
      </button>
    </div>
  );
};

export default Chatbot;
