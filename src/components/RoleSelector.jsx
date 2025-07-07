import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../slices/authSlice";

export default function RoleSelector() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Current Role: {role}</h2>
      <button onClick={() => dispatch(setRole("user"))}>User</button>
      <button onClick={() => dispatch(setRole("admin"))}>Admin</button>
    </div>
  );
}
