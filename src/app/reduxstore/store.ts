import { configureStore, createSlice } from "@reduxjs/toolkit";
import { searchInputs } from "./searchInputs";
import { SearchStoreType } from "./storeInterafces";

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
    updatesearch : (state , action : {payload : SearchStoreType , type : string} ) => {
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
export type AppDispatch = typeof store['dispatch']

const { 
  update, 
  updatecon, 
  updateval , 
  updatestatic ,
  updatesearch 
} = counterSlice.actions;

export {
  store, 
  update, 
  updatecon, 
  updateval, 
  updatestatic ,
  updatesearch
};