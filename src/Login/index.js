import React from 'react'
import "./index.css"

function Login({
    children,
    formLogin,
    setFormLogin,
    error,
    setError,
    loading,
    setLoading,
    sentForm,
    setSentForm
    }) {

  return (
    <div className='Content-children'>
        {
          React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, {  
            formLogin,
            setFormLogin,
            error,
            setError,
            loading,
            setLoading,
            sentForm,
            setSentForm,
          })) 
        }
    </div>
  )
}

export {Login}