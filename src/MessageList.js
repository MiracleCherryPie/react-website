import React from "react";
import './ChatApp.css';

function MessageList({ messages }) {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}

export default MessageList;
