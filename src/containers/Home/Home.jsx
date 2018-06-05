import React, {Component} from 'react';
import {ProductList, Compare} from '../../components'
import * as productActions from '../../actions/products';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
    console.log("componentWillMount Home: ",this.props);
  }
  render() {
    console.log('Render HOME: ', this.props);
    //const {products, actions} = this.props;
    const products = this.props.products;
    const actions = this.props.actions;
    const compareProducts = products.filter(product => product.compare);
    return (
      
       <div className="home mt-5">
        < ProductList products={ products } compare={actions.compare}/>
        { compareProducts.length >= 2 &&  <Compare products={compareProducts}/>  }
       </div>
     
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch=>({
    actions:bindActionCreators(productActions, dispatch)
  })
)(Home);
