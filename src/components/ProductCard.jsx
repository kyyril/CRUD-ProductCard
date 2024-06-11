import React from 'react'


const productCard = (props) => {
    return(
      <div className='card'>
        <img style= {{
        width:"100%",
        height:"200px",
        borderRadius:"10px 10px 0px 0px"}}
        src={props.imageURL}
        alt='mobil'>
        </img>
        <div className="container">
          <h4>{props.nama}</h4>
          <p>{props.deskripsi}</p>
        </div>
      </div>
    )
  }

export default productCard;