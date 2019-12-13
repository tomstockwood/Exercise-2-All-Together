import React, { Component } from 'react';
import MessageList from './MessageList.js';
import InputGroup from './InputGroup.js';

function ChatWindow(props) {
  return (
    <div className="chat-window">
      <h2>{props.heading}</h2>
      <div className="name sender">{props.user.username}</div>

      <MessageList
        messages={props.messages}
        user={props.user}
      >
      </MessageList>

      <InputGroup
        isDisabled={props.isDisabled}
        value={props.value}
      >
      </InputGroup>
    </div>
  )
}

export default ChatWindow