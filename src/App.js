import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>permissions calculator</h1>
        <div id="main">
        <div id="result_box">
          <div id="first_digit">-</div>
          <div id="second_digit">-</div>
          <div id="third_digit">-</div>
        </div>
          <table>
            <tr className="user">
              <td id="user">User</td>
              <td className="read">Read</td>
              <td className="write">Write</td>
              <td className="execute">Execute</td>
            </tr>
            <tr className="group">
              <td id="group">Group</td>
              <td className="read">Read</td>
              <td className="write">Write</td>
              <td className="execute">Execute</td>
            </tr>
            <tr className="other">
              <td id="other">Other</td>
              <td className="read">Read</td>
              <td className="write">Write</td>
              <td className="execute">Execute</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
