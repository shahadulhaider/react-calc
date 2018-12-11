import React from 'react'
import Header from './Header'
import Calculator from './Calculator'

const App = () => (
  <div className="calc">
    <Header title="react calc" />
    <div className="mt-md-5">
      <Calculator />
    </div>
  </div>
)



export default App

