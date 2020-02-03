import React from 'react';

export default ({id, name, price, units, addProduct}) => (
  <div className="products-product">
    <h2>{ name }</h2>
    <h4>${ price }</h4>
    <h5>Units: { units }</h5>
    <button
      onClick={(e) => {
          e.preventDefault();
          addProduct({
            name,
            price,
          })
        }}
      >Add</button>
  </div>
)