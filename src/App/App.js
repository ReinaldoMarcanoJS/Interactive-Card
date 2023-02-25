import './App.css';
import { FormData } from '../FormData';
import { VisualCard } from '../VisualCard';
import { Login } from '../Login';
import { useTodos } from '../App/useTodos'
import React from 'react';



function App() {

  const {
    formLogin,
    setFormLogin,
    error,
    setError,
    loading,
    setLoading,
    sentForm,
    setSentForm,
  } = useTodos()
  return (
    <React.Fragment>

    <Login 
        formLogin={formLogin}
        loading={loading}
        setLoading={setLoading}
        sentForm={sentForm}
        setSentForm={setSentForm}
        setFormLogin={setFormLogin}
        setError={setError}
    >
      <VisualCard/>
      <FormData/>
    </Login>
      
    </React.Fragment>
    
  );
}

export default App;
