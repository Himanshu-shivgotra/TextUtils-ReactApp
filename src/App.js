
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode is enabled', 'success')
      // document.title = 'TextUtils - Dark mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success')
      // document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route exact path='/about'>
              <About mode={mode} />
            </Route>
            <Route path='/'>
              <TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces." showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>


    </>
  );
}
export default App;
