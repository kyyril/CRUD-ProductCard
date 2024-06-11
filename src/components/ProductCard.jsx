import React from 'react'
import { useState } from 'react';

const productCard =  (props)=> {
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1)
  }
  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1)
  }


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
        <div className={`card-keranjang ${jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"}`}>
          {
            jumlahProduct > 0 ? (
              <>
              <button className='button' onClick={tambahProduct}>+</button>
              <div>{jumlahProduct}</div>
              <button className='button' onClick={kurangProduct}>-</button>
              </>
            ):(
              <div className='keranjang' onClick={tambahProduct}>+Keranjang</div>
            )
          }
        </div>
      </div>
    )
  }

export default productCard;