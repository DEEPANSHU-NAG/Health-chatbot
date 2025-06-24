import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ChatArea from "./ChatArea";

const ChatSection = ({ showSidebar, onToggleSidebar }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your health assistant. How can I help you today?",
      type: "bot",
    },
  ]);

  const sendMessage = async (userInput) => {
    const userMessage = { text: userInput, type: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, type: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, there was an error getting a response.", type: "bot" },
      ]);
    }
  };

  return (
    <div
      className="flex-grow-1 d-flex flex-column p-2"
      style={{ height: "100vh" }}
    >
      {/* Sidebar toggle button */}
      {!showSidebar && (
        <button
          onClick={onToggleSidebar}
          className="btn btn-light mb-2"
          style={{ width: "fit-content" }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {/* Chat content */}
      <div className="bg-white rounded flex-grow-1 position-relative overflow-hidden">
        {/* Scrollable messages */}
        <div
          className="flex-grow-1 overflow-auto px-3 pt-3"
          style={{ height: "100%", paddingBottom: "70px" }}
        >
          {messages.map((msg, idx) => (
            <p
              key={idx}
              className={
                msg.type === "user"
                  ? "text-end text-primary"
                  : "text-start text-success"
              }
              style={{ marginBottom: "0.5rem" }}
            >
              {msg.text}
            </p>
          ))}
        </div>

        {/* Sticky input */}
        <div
          className="position-absolute bottom-0 start-0 end-0 px-3 py-2 border-top bg-white"
          style={{ zIndex: 10 }}
        >
          <ChatArea onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
