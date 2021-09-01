import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCart, setFilteredCart] = useState(cart);

  // function fetchCartItems() {
  //   console.log("1");
  //   fetch("http://localhost:4004/cart") // uzun vadeli is
  //     .then((resp) => {
  //       console.log("3");
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       console.log("4");
  //       setCart(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("2");

  //   // Murat 1,3,4 2
  //   // Taha 1,3,2,4
  //   // 1,2, 3, 4
  // }

  async function fetchCartItems() {
    try {
      const resp = await fetch("http://localhost:4004/cart"); //Kenara atar ,
      const data = await resp.json();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }
  //React REDUX

  // function fetchCartItems() {
  //   console.log("1"); // yazdir
  //   setTimeout(() => { // promise timeoumust isim bitsin geri donecem
  //     console.log("2"); //yazdir
  //   }, 0);

  //   console.log("3"); // yazdir

  //   setTimeout(() => { // promise timeoumust isim bitsin geri donecem
  //     console.log("4"); //
  //   }, 0);
  //   setTimeout(() => {// promise timeoumust isim bitsin geri donecem
  //     console.log("5");
  //   }, 1000);
  //   // Murat 4,1
  //   // 1 3 2 4
  //   // 1 3 2 4 1000ms 5
  // }

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
