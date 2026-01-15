import React from 'react'
import SaveButton from './OtherInformation/SaveButton.jsx'
import TopImg from './OtherInformation/TopImg.jsx'


const Card_Top = (props) => {
     
  return (
    <div>
      <div className="top">
            <TopImg brandImage={props.brandLogo} />
            <SaveButton />
          </div>
    </div>
  )
}

export default Card_Top
