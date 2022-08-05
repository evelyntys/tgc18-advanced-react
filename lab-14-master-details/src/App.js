import React, {useState} from 'react';
import ProductListing from './ProductListing';
import ProductProvider from './ProductProvider';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';

function App(){
  return(
    <React.Fragment>
      <ProductProvider>
        <Router>
          <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetailsPage/>} />
          </Routes>
        </Router>
      </ProductProvider>
    </React.Fragment>
  )
}

export default App