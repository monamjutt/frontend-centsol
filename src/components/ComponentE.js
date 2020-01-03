import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext, { UserConsumer } from './userContext'

class ComponentE extends Component {
  static contextType = UserContext // one way of using context
  render() {
    return (
      <div>
        Hello from {this.context.name}
        <UserConsumer>
          {
            (json) => {
              return(
                <div>
                  Hello again {json.name}
                </div>
              )
            }
          }
        </UserConsumer>
        <ComponentF/>
      </div>
    )
  }
}

// ComponentE.contextType = UserContext // second way of using context

export default ComponentE
