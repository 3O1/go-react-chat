import React, { Component } from 'react';

const Header = () => (
  <div className="header bg-black h-36 text-left pl-12 pt-12 space-y-2">
    <h2 className="text-white font-bold text-3xl">Golang and React chat app</h2>
    <h2 className="text-gray-500">
      This is a global chat for anyone who is on this page.
    </h2>
  </div>
);

export default Header;
