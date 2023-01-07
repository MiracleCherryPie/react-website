import React, { useState } from "react";

function MessageForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

export default MessageForm;
