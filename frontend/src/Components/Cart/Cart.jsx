import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CEHCKOUT:</div>
        <div className="cart-items">
          {myCart.slice(1).map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <img
                  src={item.imageUrl}
                  className="cart-item-img"
                  alt="error"
                />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">TOTAL:{total} $</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckOut}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleHome}>
          RETURN HOME
        </button>
      </section>
    </>
  );
};

export default Cart;
