import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

  const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
    // console.log("ProductsL:", products)
  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    // console.log("userValues:", userValue)
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
 
    return dispatch({ type: "UPDATE_FILTER_VALUES", payload: { name, value } });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext }