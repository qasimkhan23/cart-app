import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseCount, decreaseCount } from "../slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            {item.name} - ${item.price} x {item.count}
            <button
              onClick={() => dispatch(increaseCount(item.id))}
              style={{ marginLeft: "10px" }}
            >
              +
            </button>
            <button
              onClick={() => dispatch(decreaseCount(item.id))}
              style={{ marginLeft: "5px" }}
            >
              -
            </button>
            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ marginLeft: "5px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
