import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

import axios from "axios";

const API = "https://api.pujakaitem.com/api/products";

const AC = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products:[]
}

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET-LOADING" })
    try {
      const res= await axios.get(url);
      const products = await res.data;
      dispatch({type:"SET-DATA", payload:products})
      
    } catch (error) {
      dispatch({type:"SET-ERROR"})
    }


  }

useEffect(()=>{getProducts(API)},[])
  return <AC.Provider value={state}>{children}</AC.Provider>
}

const useProviderContext = () => {
  
  return useContext(AC);
}


export {useProviderContext,AppProvider}