import React, { useState } from "react";
import Chat from "./Chat";

function Messenger() {
  const [message, setMessage] = useState(["hello", "world"]);
  const [localState, setLocalState] = useState("");

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
