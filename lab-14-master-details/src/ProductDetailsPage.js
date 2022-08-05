import { Fragment, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from './ProductContext';

export default function ProductDetailsPage(props) {
    // eg: /products/:productId
    // useParams() will return an object with all the parameters and their values
    // just like req.params in express
    const { productId } = useParams();
    const [product, setProduct] = useState({}); //store the product that we are displaying
    const context = useContext(ProductContext)
    // empty array so effect will immediately render when triggered
    // if put productId, then useEffect will be triggered every time the is a change in productId
    useEffect(() => {
        const product = context.getProductById(productId);
        setProduct(product);
    }, [productId])

    return(
        <Fragment>
            <h1>{product.product_name}</h1>
            <ul>
                <li>
                    id: {product.id}
                </li>
                <li>
                    cost: {product.cost}
                </li>
            </ul>
        </Fragment>
    )
}