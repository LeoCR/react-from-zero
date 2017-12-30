import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import getReactContact from '../components/contacts/Contact';
import getComments from '../components/comments/Comments';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Leonardo',
  lastName: 'Aranibar'
};


const introText = React.createElement(
  'p',
  {className: 'App-intro'},
  'To get started :'
);


class App extends Component {
  render() {
    function welcomeMsg(){
      return "Welcome to React=> ";
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{welcomeMsg()} {formatName(user)}</h1>
        </header>
        {introText} 
        <p className="App-intro">
           Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
getComments();
getReactContact();
export default App;
