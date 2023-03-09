import React, { Component } from 'react';
import Message from '../Message';

class ChatHistory extends Component {
  render() {
    console.log(this.props.chatHistory);
    const messages = this.props.chatHistory.map((msg) => (
      <Message key={msg.timeStamp} message={msg.data} />
    ));

    return (
      <div className="ChatHistory bg-black pl-12 pb-8">
        <h2 className="text-white text-2xl font-medium text-left ">
          Chat History:
        </h2>
        <p className="text-left text-white py-2">{messages}</p>
      </div>
    );
  }
}

export default ChatHistory;
