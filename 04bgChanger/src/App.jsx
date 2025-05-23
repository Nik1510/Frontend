import { useState } from 'react'


function App() {
  const [color ,setColor] =useState("olive")

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setColor(randomColor);
  }; 

  const handleHover=()=>{
    setColor(generateColor());
  }
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}} 
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           <div
          className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-4xl'
          
        >
          
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("Red")}
          >Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >green</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"Olive"}}
          onClick={()=>setColor("Olive")}
          >olive</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"grey"}}
          onClick={()=>setColor("grey")}
          >grey</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow")}
          >yellow</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"Pink"}}
          onClick={()=>setColor("Pink")}
          >Pink</button>


          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:"Purple"}}
          onClick={()=>setColor("Purple")}
          >Purple</button>

                    <button
            className="outline-none px-4 py-1 m-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }} // Corrected spelling
            onClick={() => setColor("lavender")}    // Match spelling
          >
            Lavender
          </button>

          <button
            className="outline-none px-4 py-1 m-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("#FFFFF7")}
          >
            White
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large' 
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}
          >black</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large' 
          style={{backgroundColor:color}}
          onClick={generateColor}
          >Random</button>
          
         
           
           </div>
       

        </div>
      </div>
    </>
  )
}

export default App
