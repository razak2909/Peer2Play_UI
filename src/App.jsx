import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure to include Tailwind CSS in your project.
import './index.css';


const App = () => {
  const [timeRemaining, setTimeRemaining] = useState(180); // 2:49 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
      <header className="text-center mb-6">
        <img
          src="assets\robot-icon.png"
          alt="Voicer Logo"
          className="mx-auto w-20 h-20 mb-4"
        />
        <h1 className="text-purple-500 text-3xl font-bold  ">VOICER</h1>
        <p className="text-gray-500 ">Speak your mind, I'm listening</p>
      </header>

      <main className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <section className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 text-left mb-4 text-xl">Welcome to Voicer</h2>
          <p className="text-gray-600 text-left mb-2 text-md">
            Explore the topic displayed on your screen and feel free to dive into
            the conversation with us. Let's make it engaging and insightful.
          </p>
          <div className="mt-4 p-4 bg-purple-50 border border-purple-300 rounded-md ">
            <strong className="text-purple-500 block text-left bg-purple-50 text-xl mb-2" >Topic:</strong>
            <p className="text-purple-600 font-medium text-left bg-purple-50 text-md">
              How can technology and Artificial Intelligence transform and improve the education system
            </p>
          </div>
        </section>

        <section className="flex justify-between items-center mt-7 mb-7">
          <div className="flex items-center text-gray-800 text-md">
            <span role="img" aria-label="clock" className="mr-2"><svg class="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg></span>
            Time remaining: {formatTime(timeRemaining)}
          </div>
        </section>

        <section className="bg-purple-50 p-2 w-75 max-w-lg rounded-md border border-purple-300 flex items-center justify-between text-left">
          <p className="text-gray-600 bg-purple-50 text-sm mt-2 mb-2">
            Hi! I'm VOICER. I'd love to discuss how technology and Artificial Intelligence can
            transform and improve the education system. What are your thoughts on this topic?
          </p>

        </section>

        <section className="border border-gray-200 rounded-lg p-6 mt-5 sticky bottom-0 bg-white shadow-md bg-opacity-50">
          <section class="flex justify-between items-center mt-2">
            <button class="bg-white text-sm text-gray-800 py-1 px-2 rounded hover:bg-White-800 shadow flex items-center">
              <svg class="h-8 w-8 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Conversation
            </button>
          </section>


          <section>
            <button className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600">
              <span role="img" aria-label="microphone"><svg class="w-7 h-8 text-gray-800 dark:text-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/>
</svg>
</span>
            </button>
          </section>
        </section>

        <div class="flex justify-center items-center mt-2">
          <div class="flex space-x-4">
            <div>
              <p class="text-gray-500 flex items-center">
                <svg class="h-6 w-4 text-red-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                  <line x1="8" y1="9" x2="16" y2="9" />
                  <line x1="8" y1="13" x2="14" y2="13" />
                </svg>
                admin@voicerpro.in
              </p>
            </div>
            <div>
              <p class="text-gray-500 flex items-center"><svg class="h-6 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
                +918618197603</p>
            </div>
          </div>
        </div>




      </main>
    </div>
  );
};

export default App;
