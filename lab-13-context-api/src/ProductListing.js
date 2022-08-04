import React, { useContext } from 'react';
import ProductContext from './ProductContext';

export default function ProductListing() {
    // refers to value={context} in App.js
    const productContext = useContext(ProductContext);
    return (
        <React.Fragment>
            <ul>
                {
                    productContext.products().map(each => {
                        return (
                        <li>
                            {each.product_name}: 
                            (${each.cost})
                        </li>)
                    })
                }
            </ul>
        </React.Fragment>
    )
}