import React from 'react'
import './App.css'
import Container from './Container'
import Product from './Product'
import Container1 from './Container1'
//import Container1 from './Container1'

function App() {

  var product1 = "Buzdolabı"

  return (
    <div>

      <div>
        <h3>
          Ürün Bilgileri
        </h3>
        <hr />
      </div>
{
/*
      <div>
        <Container1/>
      </div>
*/
}
    <div>
      <Container>
        <Product productName={"Ayakkabı"}price={3200}/>
        <Product productName={"Pantolon"}price={1200}></Product>
        <Product productName={product1}price={32000}/>
      </Container>

    </div>

    </div>
  )
}

export default App