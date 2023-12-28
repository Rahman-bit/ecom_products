import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/ProductReducer';

const AppContext = createContext();

const Api = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({children})=>{

    const[state, dispatch] = useReducer(reducer, initialState)

    const getPorducts = async(url)=>{

        dispatch({type: "IS_LOADING"})

           try {
             const res = await axios.get(url);
             const products = await res.data;
            //  console.log('data:', products)
             dispatch({type:"SET_API_DATA", payload : products})
           } catch (error) {
            dispatch({type: "API_ERROR"})
           }
        }

         // my 2nd api call for single product
        const getSingleProduct = async (url) => {

            dispatch({ type: "SET_SINGLE_LOADING" });

            try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            // console.log("singleProduct URl:", singleProduct)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
            } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
            }
        };

    useEffect(()=>{
        
        getPorducts(Api)

    },[])
    
    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
                {children}
           </AppContext.Provider>
}

const useProductContext = ()=> {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useProductContext };