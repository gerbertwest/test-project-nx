import { createReducer } from "@reduxjs/toolkit"
import { loadData } from "./action"

const initialState = {
  data: {
    message: '123'
  }

}

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(loadData, (state, action) => {
    console.log(action.payload)
    console.log(state.data.message)
    state.data.message = action.payload.message;
    console.log(state.data.message)
  })
})

export {reducer};
