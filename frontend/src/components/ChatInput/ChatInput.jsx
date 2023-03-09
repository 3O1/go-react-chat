import React, { Component } from 'react';

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <input
          type="text"
          onKeyDown={this.props.send}
          placeholder="Type a message"
        />
      </div>
    );
  }
}

export default ChatInput;
