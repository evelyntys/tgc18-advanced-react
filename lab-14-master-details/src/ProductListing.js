import { Fragment, useContext } from 'react';
import ProductContext from './ProductContext';
import { Link } from 'react-router-dom'

export default function ProductListing() {
    const context = useContext(ProductContext);
    return (
        <Fragment>
            <h1>product listings</h1>
            <ul>
                {
                    context.getProducts().map(p => {
                        return(
                        <li>
                            <Link to={'/product/' + p.id}>
                            {p.product_name}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}