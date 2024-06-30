import React from 'react'
import ReactDOM from 'react-dom/client'

// import { Layout } from './Components/Layout/layout'
// import { Counter } from './Components/Counter/counter'
// import userClient from './clients/user'
//
// userClient.init(
//   'https://mapstorage-7e78.restdb.io',
//   // eslint-disable-next-line no-undef
//   process.env.API_KEY,
//   fetch
// )

const App = () => {
  return (
    <div>
      <p>Hello from React !!!!</p>
      <div>Test</div>
      {/*<Counter active={true} type="done" value={12} />*/}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
