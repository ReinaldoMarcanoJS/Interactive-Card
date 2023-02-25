import React from "react";
import { useState } from "react";
import { reach } from "yup";
function useTodos(){
    
    const initialValue = {
        name: "",
        number_card: "",
        MM : "",
        YY : "",
        cvc: ""
    }

    const [formLogin,setFormLogin] = React.useState(initialValue)
    const [error,setError] = React.useState(null);
    const [loading,setLoading] = React.useState(false);
    const [sentForm,setSentForm] = React.useState(false);
    
   
    return({
            formLogin,
            setFormLogin,
            error,
            setError,
            loading,
            setLoading,
            sentForm,
            setSentForm,
        })
}

export{useTodos}