import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import check from "../image/icon-complete.svg"
import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';
import "./index.css"
function FormData({
    setFormLogin,
    setLoading,
    sentForm,
    setSentForm,
    setError
}) {



    const schema = yup.object().shape({
        name: yup.string('email invalido')
        .required("Este campo es requerido")
        .min(3,"El nombre debe tener al menos un caracteres")
        .max(30,"El nombre debe tener maximo 30 caracteres"),

        number_card: yup.string()
        .required("Numero de tarjeta es requerido")
        .min(16,"debe tener 16 numeros")
        .max(16,"debe tener 16 numeros la terjeta"),

        MM : yup.string().required("")
        .min(2,"debe tener 2 numeros")
        .max(2,"debe tener 2 numeros") ,

        YY : yup.string().required("")
        .min(2,"debe tener 2 numeros")
        .max(2,"debe tener 2 numeros"),

        cvc: yup.string().required("")
        .min(3,"debe tener 3 numeros")
        .max(3,"debe tener 3 numeros") ,
            
        })


    const submitForm = (values) => {
        try{
                setLoading(true)

                const valuesForm = (values) => {

                    let valueForm = values;
                    let num = String(valueForm.number_card)            
                    let num1 = num.slice(0,4)  
                    let num2 = num.slice(4,8)
                    let num3 = num.slice(8,12)
                    let num4 = num.slice(12,16)
                    num = num1 + " " + num2 + " " + num3 + " " + num4;
                    valueForm.number_card = num;
                    valueForm.name = valueForm.name.toUpperCase()
                    return valueForm               
                }
                
                const num = valuesForm(values)
                setFormLogin(values)
                console.log(values.number_card)
                setSentForm(true)
            values = values
            setLoading(false)
        }catch(err){
            setError(err)
        }
                 setSentForm(true)
                setLoading(true)

    }

     const handleSubmitContinue = () => {
                setLoading(false)
                setSentForm(false)
            }

          
   

    
   

    const {handleReset,handleSubmit, handleChange , errors, values} = useFormik({
        initialValues: {
            name: "",
            number_card: "",
            MM : "",
            YY : "",
            cvc: ""
        },
        validationSchema : schema,
        onSubmit: submitForm,
    })
  return (
    <React.Fragment>
    <section className={sentForm ? "div-form-check" : 'div-form'}>
        <form className='form-card' onSubmit={handleSubmit} onReset={handleReset}>
            <div className={sentForm ? "div-none-check" : 'div-form-conatiner-check'}>
                    <div className='div-info-card-name'>
                        <label className='label-form'>CARDHOLDER NAME</label>
                        <input value={values.name} type="text" className={errors.name ? "input-error input-class" : 'input-class'}  placeholder='e.g. Jane Appleseed'  name='name' onChange={handleChange}/>
                        {errors.name && <span className= {errors.name && "span-error"}>This doesn't look like a name</span>}    
                    </div>
                    <div className='div-info-card-number'>
                        <label className='label-form'>CARD NUMBER</label>
                        <input maxLength={"16"} id="elinput" value={values.number_card}   type="number" className={errors.number_card ? "input-error input-class" : 'input-class'} placeholder='e.g. 1234 5678 9123 0000' name='number_card'  onChange={handleChange}/>
                        {errors.number_card && <span className= {errors.number_card && "span-error"}>Wrong format, numbers only</span>} 
                    
                    </div>
                
                <div className='div-data-inputs'>
                    <div className='div-content-mm-yy'>
                    <div>
                        <label className='label-form'>EXP. DATE (MM/YY)</label>
                        <input   value={values.MM}  maxLength="2"  type="number" className= {errors.MM ? "input-error class-input-data" : 'class-input-data'} placeholder='MM'  name='MM' onChange={handleChange}/>

                        <input   maxLength={2}  value={values.YY}    type="number" className= {errors.YY ? "input-error class-input-data" : 'class-input-data'} placeholder='YY'  name='YY' onChange={handleChange}/> 
                    </div>
                        
                        {(errors.YY || errors.MM) && <span className= {(errors.YY || errors.MM ) && "span-error"}>Can't be blank</span>}    

                    </div>
                    <div className='div-cvc'>
                        <label className='label-form'> CVC</label>
                        <input  value={values.cvc}  maxLength="3"  type="number" className={errors.cvc ? "input-error class-input-data-cvc" : 'class-input-data-cvc'} placeholder='e.g. 123' name='cvc' onChange={handleChange}/>
                        {errors.cvc && <span className= {errors.cvc && "span-error"}>Can't be blank</span>}    

                    </div>
                
                    
                </div>
                <button className='button-form' type='submit'  onSubmit={handleSubmit} onReset={handleReset}>Confirm</button>
            </div>
            
            <div className= {sentForm ? 'div-login-completed' : "div-none-check-form" }>

                <div className='div-child-content-completed'>
                    <img src={check} className="img-check"/>
                    <p className="p-thanks-completed" >THANK YOU!</p>
                    <p className="p-text-details" >We've added your card details</p>
                    <button type='reset' onReset={handleReset} onClick={handleSubmitContinue} className="button-continue-completed">Continue</button>
                </div>

            </div>

        </form>

    </section>
    </React.Fragment>
    
  )
}

export{FormData}