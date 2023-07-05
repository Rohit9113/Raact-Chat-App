import React from 'react';

const ChatThread = ({ chatMessages, handleLikeClick }) => {
  return (
    <div>
      {chatMessages.map((message, index) => (
        <div
          key={message.id}
          className={`chat-message ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="message-content">
            <div className="message-username">{message.username}</div>
            <div className="message-text">{message.message}</div>
            <div className="message-likes">
              Likes: {message.likes}
              <button className='likebtn' onClick={() => handleLikeClick(message.id)}>Like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatThread;
