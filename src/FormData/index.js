import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import check from "../image/icon-complete.svg"
import "./index.css"
import { InputMask } from 'primereact/inputmask';
        
function FormData({
    setFormLogin,
    setLoading,
    loading,
    sentForm,
    setSentForm,
    setError
}) {

    /* Este es mi validateSchema para verificar que todos los campos esten correctos */

    const schema = yup.object().shape({
        name: yup.string('email invalido')
        .required("Este campo es requerido")
        .min(3,"El nombre debe tener al menos un caracteres")
        .max(30,"El nombre debe tener maximo 30 caracteres"),

        number_card: yup.number('este campo requiere numeros'),

        MM : yup.string().required("")
        .min(2,"debe tener 2 numeros")
        .max(2,"debe tener 2 numeros") ,

        YY : yup.string().required("")
        .min(2,"debe tener 2 numeros")
        .max(2,"debe tener 2 numeros"),

        cvc: yup.string().required("")
        .min(3,"debe tener 2 numeros")
        .max(3,"debe tener 2 numeros"),
        
            
        })


        const submitForm = (values) => {
            setLoading(true)

            setTimeout(() => {

            try{
                    const valuesForm = (values) => {
                            let valueForm = values;
                            valueForm.name = valueForm.name.toUpperCase()
                            return valueForm               
                        }
                    const num = valuesForm(values)

                    setFormLogin(values)
                    

            }catch(err){
                setError(err)
            }
            setSentForm(true)
            setLoading(false)
            }, 1000);

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
    console.log(values)
  return (
    <React.Fragment>
    <section className={sentForm ? "div-form-check" : 'div-form'}>
        <form className='form-card' onSubmit={handleSubmit} onReset={handleReset}>

            <div className={sentForm ? "div-none-check" : 'div-form-conatiner-check'}>
                    <div className='div-info-card-name'>
                        <label className='label-form'>CARDHOLDER NAME</label>
                        <input disabled={loading} value={values.name} onChange={handleChange}   type="text" className={errors.name ? "input-error input-class" : 'input-class'}  placeholder='e.g. Jane Appleseed'  name='name' />
                        {errors.name && <span className= {errors.name && "span-error"}>This doesn't look like a name</span>}    
                    </div>
                    <div className='div-info-card-number'>
                        <label className='label-form'>CARD NUMBER</label>
                        <InputMask disabled={loading} mask="9999 9999 9999 9999" value={values.number_card}   type="text"  className={errors.number_card ? "input-error input-class" : 'input-class'} placeholder='e.g. 1234 5678 9123 0000' name='number_card'  onChange={handleChange}/>
                        {errors.number_card && <span className= {errors.number_card && "span-error"}>Wrong format, numbers only</span>} 
                    
                    </div>
                
                <div className='div-data-inputs'>
                    <div className='div-content-mm-yy'>
                    <div>
                        <label className='label-form'>EXP. DATE (MM/YY)</label>
                        <input disabled={loading}  value={values.MM}  maxLength="2"  type="number" className= {errors.MM ? "input-error class-input-data" : 'class-input-data'} placeholder='MM'  name='MM' onChange={handleChange}/>

                        <input disabled={loading}   value={values.YY}    type="number" className= {errors.YY ? "input-error class-input-data" : 'class-input-data'} placeholder='YY'  name='YY' onChange={handleChange}/> 
                    </div>
                        
                        {(errors.YY || errors.MM) && <span className= {(errors.YY || errors.MM ) && "span-error"}>Can't be blank</span>}    

                    </div>
                    <div className='div-cvc'>
                        <label className='label-form'> CVC</label>
                        <input disabled={loading} value={values.cvc}  maxLength={3}  type="number" className={errors.cvc ? "input-error class-input-data-cvc" : 'class-input-data-cvc'} placeholder='e.g. 123' name='cvc' onChange={handleChange}/>
                        {errors.cvc && <span className= {errors.cvc && "span-error"}>Can't be blank</span>}    

                    </div>
                
                    
                </div>
                <button disabled={loading} className='button-form' type='submit'  onSubmit={handleSubmit} onReset={handleReset}>Confirm</button>
            </div>
            
            <div className= {sentForm ? 'div-login-completed' : "div-none-check-form" }>

                <div className='div-child-content-completed'>
                    <img src={check} className="img-check"/>
                    <p className="p-thanks-completed" >THANK YOU!</p>
                    <p className="p-text-details" >We've added your card details</p>
                    <button disabled={loading} type='reset' onReset={handleReset} onClick={() => {setLoading(false) ; setSentForm(false)}} className="button-continue-completed">Continue</button>
                </div>

            </div>

        </form>

    </section>
    </React.Fragment>
    
  )
}

export{FormData}