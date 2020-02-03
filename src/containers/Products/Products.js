import React from 'react';
import Product from '../../components/Product/Product';
import { connect } from 'react-redux';
import { addProduct } from '../../store/actions/cart/cartActions';

class Products extends React.Component {

  constructor(){
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({
      products,
    })
  }

  render (){
    const { products } = this.state;
    const { onAddProduct } = this.props;
    return (
      <div className="products">
        <h2 className="products-title">Products</h2>
        <div className="products-container">
          {
            products.map( (product) => (
              <Product key={product.id} {...product} addProduct={onAddProduct}/>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    products: state.products
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onAddProduct: (product) => dispatch(addProduct(product)), 
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Products);
