import RoleSelector from "./components/RoleSelector";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Simple Cart with Role Based Access</h1>
      <RoleSelector />
      <ProductList />
      <Cart />
    </div>
  );
}
