import React from 'react'

const Tour = ({id,name, info, image, price, deleteTour}) => {
  const [readMore, setReadMore] = React.useState(true)
  return (
    <div className='tour-container'>
      <div className="tour-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{readMore?`${info.substring(0,200)}...`:info} 
      &nbsp;&nbsp;
      <button className='read-btn' onClick={()=>{setReadMore(!readMore)}}>{readMore?'read more':'show less'}</button>
      </p>
      
      <div className="price">
      <h4>Price: ₹{price}</h4>
      <button className='btn' type='button' onClick={()=>{deleteTour(id)}}>Not Interested</button>
      </div>
    </div>
  )
}

export default Tour