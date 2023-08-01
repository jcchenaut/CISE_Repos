import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const express = require('express');
const cors = require('cors');

const app = express();

var str = ""

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy React App to Vercel by Jingchang Chen
          Access the backend:
          {accessBackend()}
          {str}
        </a>
      </header>
    </div>
  );
}

function accessBackend() {
  axios.get('http://localhost:3002/').then((res)=>{ str = res })
}

App.

export default App;
