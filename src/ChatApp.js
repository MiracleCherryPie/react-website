import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (text) => {
    setMessages([...messages, { id: Date.now(), text }]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ChatApp;
