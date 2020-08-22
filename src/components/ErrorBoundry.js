import React, {Component} from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  //this is a new react built in function that is always running and see if there is any error happening 
  //within any other child component that is wrapped in it
  componentDidCatch(error, info) {
    this.setState({ hasError: true})
  }

  render () {
    if (this.state.hasError) {
      return (<h1>Oooops! There's something wrong..</h1>)
    }
    return this.props.children //anything that is inside of error boundry, in our case it's the cardlist
  }
}

export default ErrorBoundry