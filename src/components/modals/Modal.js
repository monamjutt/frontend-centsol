import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Styled } from '../styled-components/Common';
import { ProductConsumer } from '../ProductContext';
// import styled from 'styled-components';

export class Modal extends Component {
  render() {
    const Button = Styled.buttons.Button;
    const ModalContainer = Styled.ModalContainer;
    return (
      <ProductConsumer>
        {
          (value) => {
            const { modalOpen, closeModal, cart } = value;
            const { img, title, price } = value.modalProduct;

            if (!modalOpen) {
              return null;
            }
            else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                        <h5 className="text-capitalize">item added to cart</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h5>{title}</h5>
                        <h5 className="text-muted">price : $ {price}</h5>
                        <Link to="/">
                          <Button onClick={() => closeModal()}>store</Button>
                        </Link>
                        <Link to="/cart">
                          <Button cart onClick={() => closeModal()}>go to cart</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              )
            }
          }
        }
      </ProductConsumer>
    )
  }
}

export default Modal;
