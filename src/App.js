import React, { useState } from 'react';
import UserInput from './components/UserInput';
import ChatDisplay from './components/ChatDisplay';
import SessionHistory from './components/SessionHistory';

function App() {
  const [messages, setMessages] = useState([]);
  const [sessions, setSessions] = useState([]);

  const handleUserInput = (input) => {
    // API call logic to send input and receive response
  };

  return (
    <div className='app'>
      <UserInput onSubmit={handleUserInput} />
      <ChatDisplay messages={messages} />
      <SessionHistory sessions={sessions} />
    </div>
  );
}

export default App;