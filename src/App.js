import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList.js'
import InputGroup from './InputGroup.js'
import ChatWindow from './ChatWindow.js'

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
    ],
    FirstUserMessage: '',
    SecondUserMessage: '' 
  }

  isDisabled = () => {
    return false;
  };

  handleFirstUserMessage = event => {
    this.setState({ FirstUserMessage: event.target.value });
  };
  
  handleSecondUserMessage = event => {
    this.setState({ SecondUserMessage: event.target.value });
  };

  sendFirstUserMessage = event => {
    const { messages } = this.state;
    const newMessage = this.state.FirstUserMessage;
    messages.push(
      { 
        username: 'Amy', 
        text: newMessage,
      }
    )
    this.setState(prevState => ({ messages }))
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          
          <ChatWindow
            heading={'Super Awesome Chat!'}
            user={this.state.users[0]}
            messages={this.state.messages}
            value={this.state.FirstUserMessage}
            isDisabled={this.isDisabled}
            handleMessage={this.handleFirstUserMessage}
            sendMessage={this.sendFirstUserMessage}
          >
          </ChatWindow>
          
          <ChatWindow
            heading={'Super Awesome Chat'}
            user={this.state.users[1]}
            messages={this.state.messages}
            value={this.state.SecondUserMessage}
            isDisabled={this.isDisabled}
            handleMessage={this.handleSecondUserMessage}
          >
          </ChatWindow>
        
          <button 
            className="btn submit-button" 
            disabled={this.isDisabled()}
            onClick={this.sendFirstUserMessage}
          >
            SEND
          </button>

        </div>
      </div>
    );
  }
}

export default App;
