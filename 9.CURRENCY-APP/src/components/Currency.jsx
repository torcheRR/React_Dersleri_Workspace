import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_rkKhWhng3KrTPZZmSapk7kI5sGXxFxZTcGpliZsK";

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState();

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency${fromCurrency}`
    );

    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div style={{ marginTop: "-10px" }}>
        <h3>DOVİZ KURU UYGULAMASI</h3>
      </div>

      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />

        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowCircleRight
          style={{
            marginRight: "10px",
            fontSize: "24px",
          }}
        />

        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>

      <div>
        <button
          onClick={exchange}
          style={{ marginTop: "15px", cursor: "pointer", fontSize: "15px" }}
        >
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
