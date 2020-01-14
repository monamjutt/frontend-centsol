import React, { Component } from 'react'
import Title from './functional-components/Title';
import { storeProducts } from '../data';
import { ProductConsumer } from './ProductContext';
import Product from './Product'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  render() {
    return (
      <div className="py-5">
        <div className="container">
          <Title name="" title="Products"></Title>
          <div className="row">
            <ProductConsumer>
              {
                (value) => {
                  return value.productList.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList
