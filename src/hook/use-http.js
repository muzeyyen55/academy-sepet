import { useEffect, useState } from "react";

const useHttp = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  async function fetchCartItems() {
    try {
      const resp = await fetch("http://localhost:4004/cart"); //Kenara atar ,
      const data = await resp.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  // return { response: response, error: error, fetchCartItems: fetchCartItems };
  return { response, error, fetchCartItems };
};

export default useHttp;
