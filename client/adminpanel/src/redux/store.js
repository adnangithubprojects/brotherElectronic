import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./Features/customerSlice";

// import
const store = configureStore({
  reducer: { customer: customerSlice },
});
export default store;

// redux
// import { useSelector, useDispatch } from "react-redux";
// import { userLogin, userLogOut } from "../Redux/Feature/LoginSlice.js";
// import { asyncLoginUser } from "../Redux/Feature/LoginSlice.js";

// const { token, error, loading } = useSelector((state) => state.login);
//   const dispatch = useDispatch();
//   const signIn = () => {
//     dispatch(asyncLoginUser(note));
//   };
