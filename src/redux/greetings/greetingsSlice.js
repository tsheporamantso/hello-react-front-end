import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const greetingsUrl = 'http://localhost:3000/greetings/random';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch(greetingsUrl);
    if (!response.ok) {
      throw new Error('Unable to fetch');
    }
    const data = await response.json();
    return data.greeting;
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
});

export default greetingsSlice.reducer;
