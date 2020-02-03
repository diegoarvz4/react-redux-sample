import React from 'react';
import ListItem from '../../components/ListItem/ListItem.js';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import { removeProduct, purchase } from '../../store/actions/cart/cartActions';

class CartList extends React.Component {
  constructor(){
    super();
    this.state = {
      cart: {}
    }
  }

  componentDidMount(){
    const { cart } = this.props;
    this.setState({
      cart,
    })
  }

  render(){
    const { cart, onRemoveItem, onPurchase } = this.props;
    return (
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <ul className="cart-container">
          {
            cart.products.map((item, idx) => (
              <ListItem key={idx} {...item} removeItem={onRemoveItem}/>
            ))
          }
        </ul>
        <div className="cart-resume">
          Total: { cart.total }
        </div>
        <Button action={onPurchase} text="BUY" />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = (dispatch) => (
  {
    onPurchase: () => dispatch(purchase()),
    onRemoveItem: (cartIdx) => dispatch(removeProduct(cartIdx)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartList);