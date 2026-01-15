import React from 'react'

import Card_Top from './card_top.jsx';
import Card_Middle from './card_middle.jsx';
import Card_Bottom from './card_bottom.jsx';

const Card_Parent = (props) => {
//    console.log(props)
  return (
    <div>
      <div className="parent">
        <div>
            <Card_Top brandLogo={props.job.brandLogo}/>
            <Card_Middle companyName={props.job.companyName} date={props.job.date} tag1={props.job.tag1} tag2={props.job.tag2} post={props.job.postName}/>
        </div>
        <Card_Bottom pay={props.job.pay} location={props.job.location} />
      </div>
    </div>
  )
}

export default Card_Parent
