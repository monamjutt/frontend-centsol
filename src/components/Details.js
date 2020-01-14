import React, { Component } from 'react';
import { ProductConsumer } from './ProductContext';
import {Link} from 'react-router-dom';
import { Styled } from './styled-components/Common';

export class Details extends Component {
  render() {
    const Button = Styled.buttons.Button;
    return (
      <ProductConsumer>
        {
          (value) => {
            const {
              id, company, img, info, price, title, inCart
            } = value.detailProduct;
            return (
              // title
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end of title */}
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col">
                    <img src={img} className="img-fluid" alt="product"/>
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2> model : {title}</h2>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* Buttons */}
                    <div>
                      <Link to="/">
                        <Button className="text-capitalize">
                          back to products
                        </Button>
                      </Link>
                      <Button 
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}

export default Details
