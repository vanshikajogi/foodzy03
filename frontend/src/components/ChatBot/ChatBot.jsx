// Chatbot.jsx
import React from 'react';
import './Chatbot.css'; // Optional: for styling

const Chatbot = () => {
    return (
        <div className="chatbot">
            <iframe
                className="chat-bot"
                width="350"
                height="430"
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/26e44813-1fb1-492f-a8b8-6f745839704e"
                title="Chatbot"
            ></iframe>
        </div>
    );
};

export default Chatbot;
