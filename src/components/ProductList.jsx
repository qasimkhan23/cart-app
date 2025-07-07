import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/cartSlice";

const dummyProducts = [
  { id: 1, name: "Item A", price: 100 },
  { id: 2, name: "Item B", price: 200 },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Products</h2>
      {dummyProducts.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
      {role === "admin" && <p>Admins can see this special section</p>}
    </div>
  );
}
