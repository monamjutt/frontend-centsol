import React, {Fragment} from 'react'
import Table from './Table'

//Fragments help you to save extra node of element while grouping list of children elements

function FragmentDemo() {
  return (
    // <Fragment>
    //   <h1> Fragment Demo </h1>
    //   <p>This paragraph describes the Fragment Demo component. You don't extra node elements when using this. Like before
    //     you have to enclosed elements in a <code>div</code> tag
    //   </p>
    // </Fragment>
    <Table/>
  )
}

export default FragmentDemo
