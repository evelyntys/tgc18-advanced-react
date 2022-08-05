import { Fragment, useState } from 'react';
import ProductContext from './ProductContext';

// make sure the ProductProvider has props
// ProductProvider is just a component
export default function ProductProvider(props) {
    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: 'brown rice cookies',
            cost: 9.99
        },
        {
            id: 2,
            product_name: 'seaweed cakes',
            cost: 10.50
        },
        {
            id: 3,
            product_name: 'soya milkshake',
            cost: 15.00
        }
    ])

    const context = {
        getProducts: () => {
            return products;
        },
        addProducts: (newProduct) => {
            setProducts(
                [...products, newProduct]
            )
        },
        getProductById(productId){
            return products.find(p => p.id === parseInt(productId));
        }
    }
    return (
        // use ProductProvider is a higher order component
        <ProductContext.Provider value={context}>
            {/* any components nested between ProductProvider will be in props.children and have access to context */}
            {props.children}
        </ProductContext.Provider>
    )
}
