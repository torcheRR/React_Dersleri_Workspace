import React, { useEffect } from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import "./css/Header.css";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import { MdDelete } from "react-icons/md";
import {
  calculateBasket,
  removeFromBasket,
  setDrawer,
} from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch]);

  return (
    <div id="1" style={{ paddingBottom: "200px" }}>
      <PageContainer>
        <Header />
        <hr />
        <Loading />
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <div
                  style={{ padding: "10px", fontFamily: "sans-serif" }}
                  className="flex-row"
                >
                  <img
                    style={{ marginRight: "15px" }}
                    src={product.image}
                    width={50}
                    height={60}
                    alt={product.title}
                  />
                  <p style={{ width: "320px", fontWeight: "600" }}>
                    {product.title}{" "}
                  </p>
                  <p style={{ marginRight: "30px" }}>Adet: {product.count}</p>
                  <p style={{ width: "80px", fontWeight: "600" }}>
                    {product.price}₺
                  </p>
                  <MdDelete
                    onClick={() => dispatch(removeFromBasket(product.id))}
                    style={{
                      marginRight: "10px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Sepetinizde ürün bulunmamaktadır.</p>
          )}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Toplam Tutar:{" "}
            <span style={{ fontWeight: "700" }}>{totalAmount}₺</span>
          </div>
        </Drawer>
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
