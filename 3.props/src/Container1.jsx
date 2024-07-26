import React from 'react'
import Product from './Product'

function Container1({productName,price}) {

    const product1 = "BuzDolabı";

  return (
    <div>
        <div>
             Container1 Componenti Çalıştı
        </div>

        <div>
             <Product productName="Ayakkabı" price={4500}/>
             <Product productName="Pantolon" price={1200}/>
             <Product productName={product1} price={32000}/>
        </div>

    </div>
  )
}

export default Container1