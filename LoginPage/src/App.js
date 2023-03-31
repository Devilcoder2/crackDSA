import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const formChangeHandler = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={formChangeHandler} /> : <Register onFormSwitch={formChangeHandler} />
      }
    </div>
  );
}

export default App;
