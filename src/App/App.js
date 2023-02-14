import './App.css';
import { FormData } from '../FormData';
import { VisualCard } from '../VisualCard';
import { Login } from '../Login';
import React from 'react';
function App() {
  return (
    <React.Fragment>

    <Login>
      <VisualCard/>
      <FormData/>
    </Login>
      
    </React.Fragment>
    
  );
}

export default App;
