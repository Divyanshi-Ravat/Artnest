import React from 'react'
import './card.css'

function Card(props) {
  return (
    <>
    
      <div className='card'>
        <img src={props.imgsrc} alt='' className='card_img'/>
        <div className='card_info'>
          <h3 className='card_title'>

          </h3>
          <span className='card_category'>
            {props.title}
          </span>
          <a href='' target='_blank'>
            <button>Watch now</button>
          </a>

        </div>

      </div>


    
    </>
    
  )
}

export default Card