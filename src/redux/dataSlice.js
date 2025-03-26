import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((i) => i.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((i) =>
          i.id == action.payload.id ? { ...i, ...action.payload } : i
        ),
      ];
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;
export default dataSlice.reducer;
