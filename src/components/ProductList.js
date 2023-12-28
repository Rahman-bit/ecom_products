import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GrideView from './GrideView';
import ListView from './ListView';

const ProductList = () => {
    const { filterProducts, gridView } = useFilterContext();
    // console.log("setGridView:", setGridView)
    // console.log("filterProducts:", filterProducts)

    if(gridView === true){
        return <GrideView products={filterProducts}/>
    }

    if(gridView === false){
        return <ListView products={filterProducts} />
    }
  return (
        <div>
             ProductList
        </div>
    )
}

export default ProductList
