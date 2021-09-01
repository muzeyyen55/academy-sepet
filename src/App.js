import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCart, setFilteredCart] = useState(cart);

  function fetchCartItems() {
    fetch("http://localhost:4004/cart")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSave = (data) => {
    if (data.id) {
      updateCartItem(data);
    } else {
      createCartItem(data);
    }
  };

  function createCartItem(cart) {
    //POST CREATE
    fetch("http://localhost:4004/cart", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchCartItems();
    });
  }
  function updateCartItem(cart) {
    //PUT UPDATE  PUT cart/1

    //POST CREATE
    fetch("http://localhost:4004/cart/" + cart.id, {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchCartItems();
    });
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  // [] Init calisir. Sayfa acildiginda bi BE request
  // undefined ise Her kosulda calis
  // [searchTerm] sadece search term degisitiginde
  useEffect(() => {
    setFilteredCart(
      cart.filter((c) => {
        return c.title.includes(searchTerm);
      })
    );
  }, [searchTerm, cart]);
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path="/" exact>
          <>
            <Search onChange={handleSearch} />
            <List cart={filteredCart} />
          </>
        </Route>
        <Route path="/add" exact>
          <AddItem onAdd={handleOnSave} />
        </Route>
        <Route path="/edit/:id">
          <AddItem onAdd={handleOnSave} cart={filteredCart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
