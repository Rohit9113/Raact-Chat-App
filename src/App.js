import React, { useState } from 'react';
import socket from './socket';
import ChatThread from './components/ChatThread';
import './App.css';

const user_list = ["Rohit", "Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      const username = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        id: Date.now(),
        username,
        message,
        likes: 0,
      };

      setChatMessages([...chatMessages, newMessage]);
      setMessage('');

      // Emit the new message to the server
      socket.emit('new_message', newMessage);
    }
  };

  const handleLikeClick = (id) => {
    const updatedChatMessages = chatMessages.map((msg) => {
      if (msg.id === id) {
        return {
          ...msg,
          likes: msg.likes + 1,
        };
      }
      return msg;
    });

    setChatMessages(updatedChatMessages);
  };

  return (
    <div>
      <div className="chat-container">
        <h1>Chat App</h1>
        <div className='chat-display'>
          <ChatThread
            chatMessages={chatMessages}
            handleLikeClick={handleLikeClick}
          />
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
