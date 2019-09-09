import React, {Component} from 'react';
import productData from './data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';


console.log(productData);

    

function ProductTable(props){

    let tempProducts = {};

    const products =productData.data.forEach((product,i) =>{
        if (tempProducts[product.category] === undefined){
            tempProducts[product.category] = [];

        }
        tempProducts[product.category].push(product);

        // return(
            // <proudctRow key={i} product={product} />

            // //not working below
            // <tr key={i}>
            //     <td>{product.name}</td>
            //     <td>{product.price}</td>

            // </tr>
        // )

    });


    console.log(tempProducts);
        let rows =[];
        for(let key in tempProducts){
            rows.push(<ProductCategoryRow header={key} />) //push the ProductCategoryROw onto rows
            //map through all the items on this type.
            tempProducts[key].forEach((product) =>{
                rows.push( <ProductRow product={product} />)
            })
        }


    return(
        <div className="product-table">
            <table className="table table stripe">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                </thead>

                <tbody>
                    {/* All Products go here */}
                    {rows}
                </tbody>
            
            
            
            </table>
        </div>

    )
}

export default ProductTable;
