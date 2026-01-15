import React from 'react'

const Card_Middle = (props) => {

  
  return (
    <div>
      <div className="middle">
            <div className="middle-1">
              <h4>{props.companyName}</h4>
              <span>{props.date}</span>
            </div>

            <div className="middle-2">
              <h3>{props.post}</h3>
            </div>
            <div className="middle-3">
              <span>{props.tag1}</span>
              <span>{props.tag2}</span>
            </div>
            
          </div>
    </div>
  )
}

export default Card_Middle
