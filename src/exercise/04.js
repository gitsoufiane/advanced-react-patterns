// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const gettogglerProps = ({onClick = () => {}, ...rest} = {}) => ({
    'aria-pressed': on,
    onClick: () => {
      toggle()
      onClick()
    },
    ...rest,
  })
  return {on, toggle, gettogglerProps}
}

function App() {
  const {on, gettogglerProps} = useToggle()
  return (
    <div>
      <Switch {...gettogglerProps({on})} />
      <hr />
      <button
        {...gettogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
