import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList.js'
import InputGroup from './InputGroup.js'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

// const users = [{ username: 'Amy' }, { username: 'John' }];

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  state={
    users : [
      { username: 'Amy' }, 
      { username: 'John' }
    ],
    messages : [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat!!</h2>
            <div className="name sender">{this.state.users[0].username}</div>

            {/* <ul className="message-list">
              {this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.state.users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul> */}
            
            <MessageList
              messages={this.state.messages}
              users={this.state.users}
              user={this.state.users[0]}
            >
            </MessageList>
            
            <InputGroup
              isDisabled={this.isDisabled}
            >
            </InputGroup>

            {/* <div>sx
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div> */}
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.state.users[1].username}</div>
            <ul className="message-list">
              {this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.state.users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
