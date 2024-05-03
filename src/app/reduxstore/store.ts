import { configureStore, createSlice } from "@reduxjs/toolkit";
import { searchInputs } from "./searchInputs";

const counterSlice = createSlice({
  name: "user",
  initialState: {
    value : {} ,
    condition : {
      title : "website",
      permissions : {
        news : []
      },
    },
    state : {
      cookiedata : [], 
      freshdata : [], 
      overresource : [],
      history : [],
      pushlog : false
    },
    static : {},
    search : searchInputs
  },
  reducers: {
    update : (state, action ) => {
      state.state = action.payload; 
    },
    updatecon : (state, action ) => {
      state.condition = action.payload; 
    },
    updatesarch : (state, action ) => {
        state.search = action.payload; 
      },
    updateval: (state, action ) => {
      state.value = action.payload; 
    },
    updatestatic: (state, action ) => {
      state.static = action.payload; 
    },
    
    
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export type StoreApp = typeof counterSlice
export type RootState = ReturnType<StoreApp['getInitialState']>

const { 
  update, 
  updatecon, 
  updateval , 
  updatestatic , 
} = counterSlice.actions;

export {
  store, 
  update, 
  updatecon, 
  updateval, 
  updatestatic ,
};