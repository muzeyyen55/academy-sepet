import { useEffect, useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

const DUMMY_CART = [
  {
    id: 0,
    title: "Yumurta",
    description: "Köy Yumurtası",
    quantity: 10,
    price: 0.9,
  },
  {
    id: 1,
    title: "Peynir",
    description: "Erzincan Tulum",
    quantity: 0.5,
    price: 30,
  },
  {
    id: 2,
    title: "Yoğurt",
    description: "Sütaş",
    quantity: 1,
    price: 7.5,
  },
  {
    id: 3,
    title: "Balık",
    description: "Hamsi",
    quantity: 3,
    price: 4.2,
  },
  {
    id: 4,
    title: "Diş Fırçası",
    description: "Oral B",
    quantity: 1,
    price: 12,
  },
  {
    id: 5,
    title: "Domates",
    description: "Çanakkale",
    quantity: 3,
    price: 2.5,
  },
  {
    id: 6,
    title: "Balık",
    description: "Kalkan",
    quantity: 2,
    price: 60,
  },
];
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCart, setFilteredCart] = useState(DUMMY_CART);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // [] Init calisir. Sayfa acildiginda bi BE request
  // undefined ise Her kosulda calis
  // [searchTerm] sadece search term degisitiginde
  useEffect(() => {
    setFilteredCart(
      DUMMY_CART.filter((c) => {
        return c.title.includes(searchTerm);
      })
    );
  }, [searchTerm]);
  return (
    <div className="App">
      <Search onChange={handleSearch} />
      <List cart={filteredCart} />
    </div>
  );
}

export default App;
