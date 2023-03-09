import React, { Component } from 'react';

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput text-white">
        <input
          className="outline-none bg-black border-gray-400 border rounded-lg py-2 pl-2 pr-2 w-96"
          type="text"
          onKeyDown={this.props.send}
          placeholder="Type a message"
        />
      </div>
    );
  }
}

export default ChatInput;
