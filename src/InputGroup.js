import React, { Component } from 'react';

function InputGroup(props) {
  return (
    <div>
      <form className="input-group">
        <input type="text" className="form-control" placeholder="Enter your message..." />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={props.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default InputGroup