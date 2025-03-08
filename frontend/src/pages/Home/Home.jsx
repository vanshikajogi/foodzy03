// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility

  // Toggle the visibility of the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <Header />
    
  <a
    href="https://foodcourt-3104.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="foodcourt-button"
  >
    🍽️ Food Court
  </a>



      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />

      {/* Chatbot button */}
      <button className="chatbot-button" onClick={toggleChatbot}>
        {showChatbot ? "Hide Chatbot" : "Open Chatbot"}
      </button>

      {/* Conditional rendering of the Chatbot */}
      {showChatbot && (
        <iframe
          className="chat-bot"
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/26e44813-1fb1-492f-a8b8-6f745839704e"
          title="Chatbot"
        ></iframe>
      )}
    </div>
  );
}

export default Home;
