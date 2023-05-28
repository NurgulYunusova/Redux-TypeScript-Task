// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { User } from "../models/User";

// const initialState = {
//   users: [],
//   loading: true,
//   error: {},
// };

// export const getUsers = createAsyncThunk(
//   "api/users",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get<User[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// const usersSlice = createSlice({
//   name: "usersSlice",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [getUsers.pending]: (state) => {
//       state.loading = true;
//       state.todos = [];
//       state.error = null;
//     },
//     [getUsers.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.todos = [];
//       state.error = payload;
//     },
//     [getUsers.fulfilled]: (state, { payload }) => {
//       state.todos = payload;
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// export default todosSlice.reducer;
