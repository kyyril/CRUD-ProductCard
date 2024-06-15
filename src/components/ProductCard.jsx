import React from 'react'
import { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

const productCard = ({product, onDeleteProducts}) => {
  const {id,nama,deskripsi,imageURL} = product;
  const [jumlahProduct, setJumlahProduct] = useState(0);

  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1)
  }
  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1)
  }

  const handleDelete = () => {
    onDeleteProducts(id)
  }
    return(
      <div className='card'>
        <div className='edit-delete'>
          <CiEdit className='icon-edit'/>
          <TiDelete onClick = {handleDelete} className='icon-delete'/>
        </div>
        <img style= {{
        width:"100%",
        height:"200px",
        borderRadius:"10px 10px 0px 0px"}}
        src={imageURL}
        alt='mobil'>
        </img>
        <div className="container">
          <h4>{nama}</h4>
          <p>{deskripsi}</p>
        </div>
        <div className={`card-keranjang ${jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"}`}>
          {
            jumlahProduct > 0 ? (
              <>
              <button className='button' onClick={tambahProduct}>+</button>
              <div>{jumlahProduct}</div>
              <button className='button' onClick={kurangProduct}>-</button>
              </>
            ):
            (
              <div className='keranjang' onClick={tambahProduct}>+Keranjang</div>
            )
          }
        </div>
      </div>
    )
  }

export default productCard;