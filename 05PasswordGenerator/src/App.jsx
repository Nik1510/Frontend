import { useCallback, useEffect, useState,useRef } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //Refenece hook

  const passwordRefence = useRef(null);

  const passwordGenrator= useCallback(()=>{
    let pass="";
    let str ="ACBDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="~`!@#$%^&*()_-{}[]/;:'"

    for (let i = 0; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass);

  },
    [length, numberAllowed,charAllowed,setPassword])

    useEffect(()=>{
      passwordGenrator()
    },[length,numberAllowed,charAllowed,passwordGenrator])

    const copyPasswordToClipBoard = useCallback(()=>{
      passwordRefence.current?.select();
      passwordRefence.current?.setSelectionRange(0,length+1);
      window.navigator.clipboard.writeText(password)
    },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shawdow rounded-lg overflow-hidden mb-4 bg-white'>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='Password' 
         readOnly
         ref={passwordRefence}
         />
         <button 
          onClick={copyPasswordToClipBoard}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer rounded-md hover:bg-blue-800 active:scale-95 transition-transform duration-150">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'></div>
          <input type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label >length : {length}</label>

          <div className='flex item-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev)=>{return !prev})
            }}
           />
           <label htmlFor="charInput">Character</label>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
