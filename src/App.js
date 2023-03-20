import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

    console.log(process.env.REACT_APP_API_KEY);

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Chatbot config={config} actionProvider={ActionProvider}      messageParser={MessageParser} />
    //   </header>
    // </div>
    // main method
     <div className="AppBot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
    </div>
  );
}
export default App;