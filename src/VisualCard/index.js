import React from 'react'
import Card_front from "../image/bg-card-front.png"
import Card_back from "../image/bg-card-back.png"
import "./index.css"
function VisualCard() {
  return (
    <React.Fragment>
        <div className='div-content'>
            <img src={Card_front} className="img-card-front"></img>
            <img src={Card_back} className="img-card-back"></img>
        </div>
    </React.Fragment>
  )
}

export {VisualCard}