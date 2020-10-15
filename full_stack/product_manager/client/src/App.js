import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Form from './components/Form';
import ProductDetails from './components/ProductDetails';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div>
      <Form></Form>
      <Main></Main>
      <Router>
        <ProductDetails path="/product/:id"></ProductDetails>
        <EditProduct path="/edit/:id"></EditProduct>
      </Router>
    </div>
  );
}

export default App;
