import { configureStore, createSlice } from '@reduxjs/toolkit';

// Khởi tạo trạng thái ban đầu
const initialState = {
  input: '',
  result: '',
  history: []
};

// Tạo một slice để quản lý các hành động của máy tính
const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    clearInput(state) {
      state.input = '';
      state.result = '';
    },
    addToHistory(state, action) {
      state.history.push(action.payload);
    },
    loadHistory(state, action) {
      state.history = action.payload;
    }
  }
});

// Xuất các actions
export const { setInput, setResult, clearInput, addToHistory, loadHistory } = calculatorSlice.actions;

// Tạo store
const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer
  }
});

export default store;