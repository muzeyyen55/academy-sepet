import React, { useEffect, useRef, useState } from "react"; //Hooks JS
import { useHistory, useParams } from "react-router-dom"; // REACT JS
import withLogger from "../../hoc/withLogger";
import "./index.scss";

const AddItem = ({ onAdd, cart }) => {
  const formRef = useRef();
  const history = useHistory();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (id > -1) {
      setSelectedItem(cart.find((c) => c.id == id));
    }
  }, [id]);
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
        <input
          type="text"
          id="title"
          required
          defaultValue={selectedItem?.title}
        ></input>
      </div>

      <div>
        <label htmlFor="description">Aciklama</label>
        <input
          type="text"
          id="description"
          required
          defaultValue={selectedItem?.description}
        ></input>
      </div>
      <div>
        <label htmlFor="quantity">Birim</label>
        <input
          type="number"
          id="quantity"
          required
          defaultValue={selectedItem?.quantity}
        ></input>
      </div>
      <div>
        <label htmlFor="price">Fiyat</label>
        <input
          type="number"
          id="price"
          required
          defaultValue={selectedItem?.price}
        ></input>
      </div>
      <button type="button" onClick={handleOnSave}>
        Ekle
      </button>
    </form>
  );
};

export default withLogger(AddItem, "ekleme");
