import React, { Component } from 'react';

function InputGroup(props) {
  return (
    <div>
      <form className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your message..."
          value={props.value}
          onChange={props.handleMessage}
        />
        <div className="input-group-append">
          <button 
            className="btn submit-button" 
            disabled={props.value===''}
            onClick={event => {
              event.stopPropagation()
              event.preventDefault()
              props.sendMessage(event)
            }}  
          >
            SEND
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default InputGroup