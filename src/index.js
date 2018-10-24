import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const gran = React.createElement("p", {}, "Two grannies having the time of their life!");
const p = React.createElement("p", {}, "Passengers:");
const agnes = React.createElement('li', {}, "Agnes");
const muriel = React.createElement('li', {}, "Muriel");
const list = React.createElement("ul", {}, [agnes, muriel]);

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [gran, p, list]);
  }
};

export class InFrontOfYou extends React.Component {
  render () {
    return React.createElement('div', {}, [
      React.createElement('p', {}, 'You shouldn'+ "'" + 't look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    ])
  }
}

export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: "butcher-shop"}, [
      React.createElement('p', {}, "Hello! We have the following products for sale today:"),
      React.createElement('ul', {}, BUTCHER_PRODUCTS.map(name =>
      React.createElement('li', {}, name)
    ))
    ])
  }
}


export class App extends Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster/>
        <InFrontOfYou/>
        <ButcherShop/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
