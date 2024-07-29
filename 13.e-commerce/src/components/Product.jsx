import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();

  return (
    <div className="kart">
      <img src={image} className="image" />
      <div>
        <p className="prod-title">{title}</p>
        <h3 className="prod-price">{price}₺</h3>
      </div>

      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Ürüne Git
        </button>
      </div>
    </div>
  );
}

export default Product;
