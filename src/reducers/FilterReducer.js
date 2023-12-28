
const FilterReducer = (state, action) => {

  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
    let priceArr = action.payload.map((currElm)=> currElm.price)
    let maxPrice = Math.max(...priceArr)
    // console.log("action.payload:", action.payload)

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
            ...state.filters, maxPrice, price: maxPrice
        }
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };

    case "GET_SORT_VALUE":
      // let userSelectedVal = document.getElementById('sort');
      // let sortVal = userSelectedVal.options[userSelectedVal.selectedIndex].value;
      // console.log("selectedVal:" , sortVal)
      return {
        ...state,
        sortingValue: action.payload
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProducts, sortingValue } = state;
      let sortingProducts = [...filterProducts];

      const sortingOrderFun = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }

        if (sortingValue === "highest") {
          return b.price - a.price;
        }

        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
          // newSortData = sortingProducts.sort((a,b)=> a.name.localeCompare(b.name))
        }

        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
          // newSortData = sortingProducts.sort((a,b)=> b.name.localeCompare(a.name))
        }
      };

      // if(state.sortingValue === 'lowest'){
      //     const sortingOrderFun =((a,b)=>{
      //         return a.price - b.price
      //     })
      //     newSortData = sortingProducts.sort(sortingOrderFun)
      // }
      // if(state.sortingValue === 'highest'){
      //     const sortingOrderFun =((a,b)=>{
      //         return b.price - a.price
      //     })
      //     newSortData = sortingProducts.sort(sortingOrderFun)
      // }
      // if(state.sortingValue === 'a-z'){
      //     newSortData = sortingProducts.sort((a,b)=> a.name.localeCompare(b.name))
      // }
      // if(state.sortingValue === 'z-a'){
      //     newSortData = sortingProducts.sort((a,b)=> b.name.localeCompare(a.name))
      // }

      newSortData = sortingProducts.sort(sortingOrderFun);

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUES":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];
      const { text, category, company, color, price } = state.filters;
        // console.log('tempFilterProducts:', tempFilterProducts)
        // console.log('Curr range:', range)

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curr) => {
          return curr.name.toLowerCase().includes(text)
        })
      }
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category === category
        )
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        )
      }
      if (color !=='all') {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
        curElem.colors.includes(color))
        // console.log("tempFilterProducts====11:", tempFilterProducts)
      }
      if(price === 0){
        tempFilterProducts = tempFilterProducts.filter((currPrice)=> 
            currPrice.price === price
        );
      }else{
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filterProducts: tempFilterProducts,
      };

      case 'CLEAR_FILTERS':
        return {
            ...state,
            filters : {
                ...state.filters,
                text : "",
                category: "all",
                company: "all",
                color: 'all',
                maxPrice : state.filters.maxPrice,
                price : state.filters.maxPrice,
                minPrice : 0
            }
        }
    default:
      return state;
  }
};

export default FilterReducer;
