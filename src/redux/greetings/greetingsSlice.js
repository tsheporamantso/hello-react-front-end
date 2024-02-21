import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
});

export default greetingsSlice.reducer;
