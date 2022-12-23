import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  error: null,
  loading: false,
  user: null,
  token: null,
};

export const asyncLoginUser = createAsyncThunk(
  "asyncUserLogin/post",
  async (note, { rejectWithValue }) => {
    const { email, password } = note;
    // console.log(note);
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email,
        password,
      });
      return res.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
      //   console.log(error.response.data.massage);
    }
  }
);

const LoginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUserLogOut: (state, { payload }) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    [asyncLoginUser.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [asyncLoginUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("token", payload);
    },
    [asyncLoginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { setUser, setUserLogOut } = LoginSlice.actions;
export default LoginSlice.reducer;
