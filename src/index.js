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
  render() {
    return (
      <div class="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
          <ul>
            <li>Agnes</li>
            <li>Muriel</li>
          </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
        <div>
          <p>You shouldn't look too far.</p>
          <p>Sometimes, the solution is right in front of you.</p>
        </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render() {
    return (
      <div class="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul>
        {BUTCHER_PRODUCTS.map(i => {
          return <li>{i}</li>
          })
        }
      </ul>
      </div>
    )
  }
}


export class App extends React.Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
