import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// Desctruction fonksiyonun tek argumani oldugunda arg.obj1.data ve arg.obj2.data diye almak yerine
// {obj1, obj2} olarak alarak gereksiz yere arg yazmamizin onune gecen bir yontem
// props yerine {product} yazdigimizdan dolayi sayfa iceresinde props keywordunu kullanmamiza gerek kalmiyor
const Card = ({ product }) => {
  return (
    <div className="Card">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        <span>Birim Fiyati:</span>
        {product.price} TL
      </p>
      <p>
        <span>Adet/Kg:</span>
        {product.quantity}
      </p>
      <p>
        <span>Toplam Odenen:</span>
        {(product.price * product.quantity).toFixed(2)}
      </p>
      <Link to={"/edit/" + product.id}>Duzenle</Link>
    </div>
  );
};

export default Card;
