import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      document.cookie = 'fw3v45cbv356v476b356b457b6b3346b365';

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
     // myHeaders.append('Cookie', 'fw3v45cbv356v476b356b457b6b3346b365');
      const myInit = {
          method: 'GET',
          headers: myHeaders,
          mode: 'no-cors',
          cache: 'default',
          //credentials: 'include'
      };
      const myRequest = new Request('http://localhost:4000/users', myInit);

      fetch(myRequest)
          .then(res => {
                  console.log(res.body)
              }
          )
          .then(data => {
              console.log(data)
          })
          .catch(function(err) {
              console.log(err);
          });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
