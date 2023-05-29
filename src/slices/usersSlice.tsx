import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "../models/UserState";
import { User } from "../models/User";

const initialState: UserState = {
  users: [],
  loading: true,
  error: null,
};

export const getUsers = createAsyncThunk(
  "api/users",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.users = [];
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.users = [];
      state.error = payload;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export default usersSlice.reducer;
