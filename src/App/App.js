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

    <Login>
      <VisualCard
        formLogin={formLogin}
        loading={loading}
        setLoading={setLoading}
        sentForm={sentForm}
        setSentForm={setSentForm}
      />
      <FormData
        setFormLogin={setFormLogin}
        setLoading={setLoading}
        sentForm={sentForm}
        setSentForm={setSentForm}
        setError={setError}
      />
    </Login>
      
    </React.Fragment>
    
  );
}

export default App;
