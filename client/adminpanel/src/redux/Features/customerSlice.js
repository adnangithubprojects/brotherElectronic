import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../reducer/Api";
import API from "../Api";
const initialState = {
  allCustomers: [],
  loading: false,
  error: null,
};

export const asyncAllCustomers = createAsyncThunk(
  "asyncAllCustomers/get",
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.get(`/customer/get`);
      const updateData = await result.data.filter(
        (data) => data.custstatus === "Active"
      );
      // console.log(updateData, "update Data redux");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
      //   console.log(error.response.data.massage);
    }
  }
);

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,

  extraReducers: {
    [asyncAllCustomers.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [asyncAllCustomers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allCustomers = payload;
    },
    [asyncAllCustomers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default customerSlice.reducer;
