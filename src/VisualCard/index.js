import React from 'react'
import Card_front from "../image/bg-card-front.png"
import Card_back from "../image/bg-card-back.png"
import "./index.css"
function VisualCard({formLogin,loading,setLoading,sentForm}) {

  

  return (
    <React.Fragment>
        <div className='div-content'>
        <div className='div-cards'>
          <img src={Card_back} className="img-card-back"></img>
          <img src={Card_front} className="img-card-front"></img>
            <p className='p-back-card'>{sentForm ? formLogin.cvc : "000"  } </p>
            <div className='div-front-pic'></div>
              <div className='div-front-pictwo'></div>
              <p className='p-front-card-name'>{sentForm ? formLogin.name : "JANE APPLESEED"  }</p>
              <p className='p-front-card-data'>{sentForm ?  formLogin.MM + "/" + formLogin.YY : "00/00"  }</p>
              <div className='div-p-numbers'>
              <p className='p-front-card-numbers'>{sentForm ? formLogin.number_card :  "0000 0000 0000 0000"}</p>

          </div>
        </div>
          
            


        </div>
    </React.Fragment>
  )
}

export {VisualCard}