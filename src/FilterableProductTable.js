import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'


class FilterableProductTable extends Component{
    render(){
        return(
            <div className="col-sm-3">
             {/* <h1>Hello world</h1> */}
                <SearchBar />
                <ProductTable />
            </div>
        )
    }

} 

export default FilterableProductTable;