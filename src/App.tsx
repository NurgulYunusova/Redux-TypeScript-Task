import Users from "./pages/Users";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./slices/usersSlice";

function App() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Users />
    </>
  );
}

export default App;
