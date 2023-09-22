import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "./hooks/index";
import { AxiosInstance } from "axios";
import { loadData } from "./store/action";

export const fetchDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'main/loadData',
  async (_arg, {dispatch, extra: api}) => {
    try {
    const {data} = await api.get('/');
    console.log(data)
    dispatch(loadData(data));
    } catch {
      console.log('error')
    }
  },
);
