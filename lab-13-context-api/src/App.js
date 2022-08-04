import React, {useState} from 'react';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';

function App(){
  // products should actually be set by axios at the beginning
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

  // this context object goes into productcontext
  const context = {
    // function to get all the products
    products: () => {
      return products;
    }
  }
  return(
    <React.Fragment>
      {/* provider makes context available */}
      {/* set the value of ProductContext to be the
      context object that we have just created */}
      <ProductContext.Provider value={context}>
        {/* component must be rendered under productcontext.provider for it to share the context */}
        <h1>my catalog</h1>
        <ProductListing/>
        </ProductContext.Provider>
    </React.Fragment>

  )
}

export default App