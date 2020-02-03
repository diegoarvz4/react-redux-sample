import React from 'react'

export default ({ action, text }) => (
  <div>
    <button onClick={() => action() }>{ text }</button>
  </div>
)