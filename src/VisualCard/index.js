import React from 'react'
import Card_front from "../image/bg-card-front.png"
import Card_back from "../image/bg-card-back.png"
import "./index.css"
function VisualCard() {
  return (
    <React.Fragment>
        <div className='div-content'>
        <div className='div-cards'>
          <img src={Card_back} className="img-card-back"></img>
          <img src={Card_front} className="img-card-front"></img>
          <p className='p-back-card'>000</p>
          <div className='div-front-pic'></div>
            <div className='div-front-pictwo'></div>
            <p className='p-front-card-name'>JANE APPLESEED</p>
            <p className='p-front-card-data'>00/00</p>
            <div className='div-p-numbers'>
            <p className='p-front-card-numbers'>0000 0000 0000 0000</p>

            </div>
        </div>
          
            


        </div>
    </React.Fragment>
  )
}

export {VisualCard}