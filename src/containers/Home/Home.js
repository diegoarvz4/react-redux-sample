import React from 'react';
import Products from '../Products/Products';
import CartList from '../CartList/CartList';

class Home extends React.Component {
  render (){
    return (
      <div className="home">
        <h1 className="home-title">Bakery</h1>
        <div className="home-dashboard">
          <Products />
          <CartList />
        </div>
      </div>
    );
  }
}

export default Home;
