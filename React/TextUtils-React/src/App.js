// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // setInterval(() => {
      //   document.title = "TextUtils is Amaxing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Jhakas"
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>

      <BrowserRouter> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text below to analyze" mode={mode} showAlert={showAlert} />} />
            
            <Route exact path="/about" element={<About mode={mode} />} />

          </Routes>

      </div>
      </BrowserRouter>

    </>

  );
}

export default App;
