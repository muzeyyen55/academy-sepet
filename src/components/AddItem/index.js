import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

const AddItem = ({ onAdd }) => {
  const formRef = useRef();
  const history = useHistory();
  const handleOnSave = () => {
    if (formRef.current.checkValidity()) {
      onAdd({
        title: formRef.current.elements.title.value,
        description: formRef.current.elements.description.value,
        quantity: formRef.current.elements.quantity.value,
        price: formRef.current.elements.price.value,
      });
      history.push("/");
    } else {
      alert("lutfen formu doldurunuz");
    }
  };
  return (
    <form className="AddItem" ref={formRef}>
      <div>
        <label htmlFor="title">Baslik</label>
        <input type="text" id="title" required></input>
      </div>

      <div>
        <label htmlFor="description">Aciklama</label>
        <input type="text" id="description" required></input>
      </div>
      <div>
        <label htmlFor="quantity">Birim</label>
        <input type="number" id="quantity" required></input>
      </div>
      <div>
        <label htmlFor="price">Fiyat</label>
        <input type="number" id="price" required></input>
      </div>
      <button type="button" onClick={handleOnSave}>
        Ekle
      </button>
    </form>
  );
};

export default AddItem;
