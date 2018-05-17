// import React from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {

  // this function should return the JSX we want the DOM to render
  render() {
    return (
      <div className="oldercoaster">
        Two grannies having the time of their life!
        Passengers:
        {Agnes}
        {Muriel}
      </div>
    )
  }

}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        You shouldn't look too far.
        Sometimes, the solution is right in from of you.
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render() {
    return (
      <div>
        Hello! We have the following products for sale today:
        {BUTCHER_PRODUCTS}
      </div>
    )
  }
}


export class App extends React.Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
