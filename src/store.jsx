import { configureStore, createSlice } from '@reduxjs/toolkit';

// const day = createSlice({
//   name: 'day',
//   initialState: 1,
//   reducers: {
//     setDay(state, action) {
//       return action.payload;
//     },
//   },
// });
// export const { setDay } = day.actions;

const loggedIn = createSlice({
  name: 'loggedIn',
  initialState: false,
  reducers: {
    setLoggedIn(state, action) {
      return action.payload;
    },
  },
});
export const { setLoggedIn } = loggedIn.actions;

const token = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
  },
});
export const { setToken } = token.actions;

const selectedPlace = createSlice({
  name: 'selectedPlace',
  initialState: null,
  reducers: {
    setPlace(state, action) {
      return action.payload;
    },
    clearPlace(state) {
      return null;
    },
  },
});

export const { setPlace, clearPlace } = selectedPlace.actions;

export default configureStore({
  reducer: {
    // day: day.reducer,
    loggedIn: loggedIn.reducer,
    token: token.reducer,
    selectedPlace: selectedPlace.reducer,
  },
});
