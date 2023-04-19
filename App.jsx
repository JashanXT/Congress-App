import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div>
      <h1>Chatroom</h1>
      <ul>
        {messages.map(message => (
          <li>{message}</li>
        ))}
      </ul>
      <input type="text" placeholder="Type your message here..." value={newMessage} onChange={e => setNewMessage(e.target.value)} />
      <button type="button" onClick={() => setMessages([...messages, newMessage])}>Send Message</button>
    </div>
  );
}
Export default App;




