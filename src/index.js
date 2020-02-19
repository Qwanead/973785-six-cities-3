import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  RENT_OFFERS_COUNT: 312,
};

ReactDOM.render(
    <App
      rentOffersCount = {Data.RENT_OFFERS_COUNT}
    />,
    document.getElementById(`root`)
);
