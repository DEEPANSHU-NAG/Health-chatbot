import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatArea = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form className="d-flex w-100" onSubmit={handleSubmit}>
      <div className="flex-grow-1 me-2">
        <input
          className="form-control w-100"
          type="text"
          placeholder="Ask a health question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-primary" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default ChatArea;
