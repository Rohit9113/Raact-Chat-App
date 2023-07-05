import React from 'react';

const ChatMessage = ({ username, message, likes, handleLikeClick }) => {
  return (
    <div className="chat-message">
      <span className="username">{username}:</span>
      <span className="message">{message}</span>
      <button className="like-button" onClick={handleLikeClick}>
        Like ({likes})
      </button>
    </div>
  );
};

export default ChatMessage;
