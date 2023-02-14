import React from 'react'
import "./index.css"
function FormData() {
  return (
    <React.Fragment>
    <section className='div-form'>
        <form className='form-card'>
            <div className='div-info-card-name'>
                <label className='label-form'>CARDHOLDER NAME</label>
                <input className='input-class' placeholder='e.g. Jane Appleseed'/>
            </div>
            <div className='div-info-card-number'>
                <label className='label-form'>CARD NUMBER</label>
                <input className='input-class' placeholder='e.g. 1234 5678 9123 0000'/>
            
            </div>
            
            <div className='div-data-inputs'>
                <div className='div-content-mm-yy'>
                    <label className='label-form'>EXP. DATE (MM/YY)</label>
                    <input className='class-input-data' placeholder='MM'/>
                    <input className='class-input-data' placeholder='YY'/>

                </div>
                <div className='div-cvc'>
                    <label className='label-form'> CVC</label>
                    <input className='class-input-data-cvc' placeholder='e.g. 123'/>
                </div>
                
            </div>
            

            <button className='button-form'>Confirm</button>
        </form>

    </section>
    </React.Fragment>
    
  )
}

export{FormData}