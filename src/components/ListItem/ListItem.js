import React from 'react';

export default ({ name, price, cartIdx, removeItem }) => (
  <li className="cart-item">
    <span className="cart-item-desc">A { name } for ${ price } <a onClick={() => removeItem(cartIdx)}>Remove</a> </span>
  </li>
)