import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import appState from './mcounter'
const Counter = observer(({ appState }) => {
  return (
    <div>
      <h2>{appState.count}</h2>
      <button onClick={appState.incCounter} >Increment</button>
      <button onClick={appState.decCounter} >Decrement</button>
    </div>
  )
})

export default Counter;