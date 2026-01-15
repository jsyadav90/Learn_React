import React from 'react'

const Card_Bottom = (props) => {
  return (
    <div>
      <div className="bottom">
          <div className="bottom-1">
            <h5> ${props.pay}/hour</h5>
            <p>{props.location}</p>
          </div>
          <div className="bottom-2">
            <button >Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default Card_Bottom
