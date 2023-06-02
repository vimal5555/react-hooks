import React, { useState, useEffect } from 'react'
import './Chat.css';
import io from 'socket.io-client';

let ENDPOINT = io("http://localhost:4500");
// let ENDPOINT;

function Chat() {

     const [message, setMessage] = useState("");
     const [messages, setMessages] = useState([]);

     const socket = io(ENDPOINT);

     useEffect(() => {
          socket.on("chatmessage", (message) => {
               console.log('message: ', message);

               setMessages([...messages, message]);
          });

          return () => {
               socket.disconnect();
          };
     }, [messages]);

     const sendMessage = (event) => {
          event.preventDefault();

          if (message) {
               socket.emit("chatmessage", message, () => setMessage(""));
          }
     };


     return (
          <div className='col-md-6' style={{ maxHeight: "250px" }}>
               <div class="card">
                    <div class="chat-header">Chat</div>
                    <div class="chat-window">
                         <ul class="message-list">
                              {messages.map((message, index) => (
                                   <div key={index}>{message}</div>
                              ))}
                         </ul>
                    </div>
                    <div class="chat-input">
                         <input type="text" class="message-input" placeholder="Type your message here"
                              value={message}
                              onChange={(event) => setMessage(event.target.value)}
                         />
                         <button type='submit' onClick={sendMessage}>Send</button>
                    </div>
               </div>

          </div>
     )
}

export default Chat

// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const ENDPOINT = "http://localhost:5000"; // Change this to your Socket server endpoint

// const ChatBox = () => {
//      const [message, setMessage] = useState("");
//      const [messages, setMessages] = useState([]);

//      const socket = io(ENDPOINT);

//      useEffect(() => {
//           socket.on("message", (message) => {
//                setMessages([...messages, message]);
//           });

//           return () => {
//                socket.disconnect();
//           };
//      }, [messages]);

//      const sendMessage = (event) => {
//           event.preventDefault();

//           if (message) {
//                socket.emit("sendMessage", message, () => setMessage(""));
//           }
//      };

//      return (
//           <div>
//                <h1>Chat Box</h1>
//                <div>
//                     {messages.map((message, index) => (
//                          <div key={index}>{message}</div>
//                     ))}
//                </div>
//                <form onSubmit={sendMessage}>
//                     <input
//                          type="text"
//                          value={message}
//                          onChange={(event) => setMessage(event.target.value)}
//                     />
//                     <button type="submit">Send</button>
//                </form>
//           </div>
//      );
// };

// export default ChatBox;
