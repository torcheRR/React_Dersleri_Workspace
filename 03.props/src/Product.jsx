import React from 'react'

function Product({productName,price}) {
  return (
    <div>

        <div>
            <p>Ürün: {productName}</p>
            <p>Fiyat: {price} TL</p>
        </div>

        <hr />

    </div>
  )
}

export default Product