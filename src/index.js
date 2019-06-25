 import React, { Component } from 'react' // We need to import react so we can make use of its .component class
 import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes

export class OlderCoaster extends Component {
   render() {
     const element1 = React.createElement('p',{},'Two grannies having the time of their life!')
     const element2 = React.createElement('p',{},'Passengers:')
     const list2 = React.createElement('ul',{},
      [
        React.createElement('li',{},'Agnes'),
        React.createElement('li',{},'Muriel')
      ])
     return (
       React.createElement('div',{className:'oldercoaster'},[element1,element2,list2])
     )
   }

}


export class InFrontOfYou extends Component {
  render() {
    const p1 = React.createElement('p',{},"You shouldn't look too far.")
    const p2 = React.createElement('p',{},"Sometimes, the solution is right in front of you.")
    return (
      React.createElement('div',{},[p1,p2])
    )
  }

}

export class ButcherShop extends Component {
  render(){
    const p1 = React.createElement('p',{},'Hello! We have the following products for sale today:')
    const list = React.createElement('ul',{},
     [
       React.createElement('li',{},BUTCHER_PRODUCTS[0]),
       React.createElement('li',{},BUTCHER_PRODUCTS[1]),
       React.createElement('li',{},BUTCHER_PRODUCTS[2]),
       React.createElement('li',{},BUTCHER_PRODUCTS[3])
     ])

    return (
        React.createElement('div',{className:'butcher-shop'},[p1,list])
    )
  }
}


export class App extends Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster /> <InFrontOfYou /> <ButcherShop />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
