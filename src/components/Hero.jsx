import React, { useRef, useEffect } from 'react';

const Hero = ({ messages }) => {
  const messageEndRef = useRef(null);

 
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-auto p-6 bg-gray-100 border border-gray-300 pt-20 pb-28">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-2xl animate-pulse text-center">
          Start a conversation!
        </p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-2 mb-2 rounded-md max-w-lg ml-auto"
          >
            {msg}
          </div>
        ))
      )}
      <div ref={messageEndRef} />
    </div>
  );
};

export default Hero;
