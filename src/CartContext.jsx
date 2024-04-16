// import { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ChairProducts } from "./components/Constants";

// const cartContext = createContext();

// export function CartProvider({ children }) {
//   // Load cart items from local storage on component mount
//   const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const [originalArray, setOriginalArray] = useState([...ChairProducts]);

//   const [shuffledArray, setShuffledArray] = useState([...originalArray]);

//   let [totalAmount, setTotalAmount] = useState(0);

//   const [rowDisplay, setRowDisplay] = useState(false)

//   function shuffleArray () {

//     const arrayCopy = [...originalArray];

//     for (let i = arrayCopy.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
//     }
    
//     setShuffledArray(arrayCopy);
//   };

//   function displayRow () {
//     setRowDisplay(false)
//   };

//   function displayColumn () {
//     setRowDisplay(true)
//   }

//   useEffect(() => {
//     // Saves cart items to local storage whenever cartItems changes
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (newItem) => {
//     // Update the cartItems state
//     setCartItems((prevCartItems) => [...prevCartItems, newItem]);

//     toast.success(`${newItem.paragraph} Successfully Added To Cart !`, {
//       position: 'top-right',
//     });
//   };

//   return (
//     <cartContext.Provider value={{ cartItems, addToCart, totalAmount, setTotalAmount, originalArray, setOriginalArray, shuffledArray, setShuffledArray, shuffleArray, rowDisplay, setRowDisplay, displayRow, displayColumn }}>
//       {children}
//     </cartContext.Provider>
//   );
// }

// export default cartContext;


import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChairProducts } from "./components/Constants";

const cartContext = createContext();

export function CartProvider({ children }) {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const [originalArray, setOriginalArray] = useState([...ChairProducts]);
  const [shuffledArray, setShuffledArray] = useState([...originalArray]);
  let [totalAmount, setTotalAmount] = useState(0);
  const [rowDisplay, setRowDisplay] = useState(false);

  // const [ItemQuantity, setItemQuantity] = useState([]);
  // const ItemQuantity = [];

  function shuffleArray() {
    const arrayCopy = [...originalArray];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    setShuffledArray(arrayCopy);
  };

  function displayRow() {
    setRowDisplay(false);
  };

  function displayColumn() {
    setRowDisplay(true);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    // Update the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);

    toast.success(`${newItem.paragraph} Successfully Added To Cart !`, {
      position: 'top-right',
    });
  };
  

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, addToCart, totalAmount, setTotalAmount, originalArray, setOriginalArray, shuffledArray, setShuffledArray, shuffleArray, rowDisplay, setRowDisplay, displayRow, displayColumn, initialCartItems }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
