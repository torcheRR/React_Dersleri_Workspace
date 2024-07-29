import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetails.css";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { price, image, title, description } = selectedProduct;
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  });
  return (
    <div className="pd-main">
      <div style={{ marginRight: "50px" }}>
        <img className="pd-image" src={image} />
      </div>
      <div>
        <h1 className="pd-title">{title}</h1>
        <p className="pd-desc">{description}</p>
        <h1 className="pd-price">{price}₺</h1>

        <div className="pd-prodcount">
          <CiSquareMinus className="pd-icons" onClick={decrement} />
          <span style={{ fontSize: "35px" }}>{count}</span>
          <CiSquarePlus className="pd-icons" onClick={increment} />

          <div>
            <button onClick={addBasket} className="pd-addBtn">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
