import React, { useState, useEffect } from "react";
import Chat from "./Chat";

function Messenger() {
  const [message, setMessage] = useState([]);
  const [localState, setLocalState] = useState("");

  useEffect(() => {
    const link =
      "https://limitless-chat-application-default-rtdb.firebaseio.com/chats.json";
    fetch(link)
      .then((response) => response.json())
      .then((responseData) => {
        setMessage(responseData);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage([...message, [localState]]);
    setLocalState("");
  };
  return (
    <div>
      <div className="container">
        <h2>Chat application for Limitless</h2>
        <div className="outputs">
          {message.map((sms, index) => (
            <Chat key={index} chat={sms} />
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setLocalState(e.target.value)}
            value={localState}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Messenger;
