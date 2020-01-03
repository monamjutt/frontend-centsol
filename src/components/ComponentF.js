import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (json) => {
            return (
              <div>
                Consumer {json.name} and age is {json.age}
              </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
