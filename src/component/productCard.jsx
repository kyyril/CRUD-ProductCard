import React from "react"

const productCard = () => {
    return(
      <div className='card'>
        <img style={{
        width:"100%",
        height:"200px",
        borderRadius:"10px 10px 0px 0px",
        }}
        src='https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
        alt=''>
        </img>
        <div className="container">
          <h4>Ford</h4>
          <p>Ford adalah mobil yang sangat bagus!</p>
        </div>
      </div>
    )
  }

export default productCard;