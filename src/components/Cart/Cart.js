import React, { Component, Fragment } from 'react'
import Title from '../functional-components/Title'
import CartColumns from './CartColumns'
import { ProductConsumer } from '../ProductContext'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'

export class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if(cart.length > 0){
                return(
                  <Fragment>
                    <Title name="Your" title="Cart"></Title>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotal value={value}/>
                  </Fragment>
                )
              }
              else{
                return(
                  <EmptyCart/> 
                )
              }
            }
          }
        </ProductConsumer>
      </section>
    )
  }
}

export default Cart
