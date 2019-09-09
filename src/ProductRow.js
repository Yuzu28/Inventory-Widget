import React, {Component} from 'react';

function ProductRow(props){
    let productClass = "";
    let fontStyle = {}
    if(!props.product.inStock){
        productClass= "text-danger"
        fontStyle ={
            fontWeight: "bold"
        }

    }
    return(
        // <h3>Sanity Check</h3>
        <tr>
                <td style={fontStyle} className={productClass}>{props.product.name}</td>
                <td>{props.product.price}</td>

            </tr>
    )
}

export default ProductRow;