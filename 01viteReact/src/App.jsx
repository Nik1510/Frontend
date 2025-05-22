import Chai from "./chai"

function App() {

  const userName ="Nikhil"

  return (
    <>
      <Chai/>
      {/* here {username} is evaluated  expression , here we write final outcome  */}
      <h1> Chai aur React| {userName}</h1>
      <p>Nikhil want wants to drink</p>
      <p> Button is not reactive</p>
      <button id="btn">Click</button>
    </>
     
  )
}


export default App
