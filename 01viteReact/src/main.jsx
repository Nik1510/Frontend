import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherUser = "Chai aur React"

const reactElement =React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click me to visit google",
  anotherUser
)

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


createRoot(document.querySelector('#root')).render(
  // <App/>
  reactElement
)
