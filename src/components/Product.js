import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Product.css';

const Product = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button
              className="add-to-cart-btn"
              onClick={() => {
                const tempstate = cartItems.filter((cartItem) => item.id === cartItem.id);
                if (tempstate.length > 0) {
                  alert('Item already exists in the cart!');
                } else {
                  dispatch({ type: 'ADD', payload: item });
                  alert('Item successfully added to the cart!');
                }
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;