import { configureStore, createSlice } from '@reduxjs/toolkit';

const day = createSlice({
  name: 'day',
  initialState: 1,
  reducers: {
    setDay(state, action) {
      return action.payload;
    },
  },
});
export const { setDay } = day.actions;

export default configureStore({
  reducer: { day: day.reducer },
});
