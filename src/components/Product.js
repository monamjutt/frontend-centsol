import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductWrapper from './styled-components/ProductWrapper'
import { ProductConsumer } from './ProductContext';

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {
              value => (
                <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                  <Link to='/details'>
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button className="cart-btn" onClick={() => {
                      value.openModal(id);
                      value.addToCart(id);
                    }
                  } disabled={inCart ? true : false}>
                    {
                      inCart ?
                        (<p className="text-capitalize mb-0" disabled>
                          {" "}
                          in inCart
                          </p>) :
                        (<i className="fas fa-cart-plus" />)
                    }
                  </button>
                </div>
              )
            }
          </ProductConsumer>
          {/* CARD FOOTER */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 mt-4">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className=""> $ </span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

export default Product
