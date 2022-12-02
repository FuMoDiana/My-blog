import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
  name:'home',
  initialState:{
    counter:0
  },
  reducers:{
    addNumber(state,{payload}){
      state.counter = state.counter + payload
    }
  }
})

export const {addNumber} = homeSlice.actions
export default homeSlice.reducer;