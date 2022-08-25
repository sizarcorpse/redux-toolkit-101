import { createSlice } from "@reduxjs/toolkit";

const initializeState = [
  { id: "0", name: "Sizar Corse" },
  { id: "1", name: "Devil Evil" },
];

const usersSlice = createSlice({
  name: "users",
  initialState: initializeState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
