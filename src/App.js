import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import homescreen from './screens/homescreen';
import productscreen from './screens/productscreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">AMANOZZO </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={productscreen}></Route>
          <Route path="/" component={homescreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
