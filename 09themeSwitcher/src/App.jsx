import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("ligit");
  const ligitTheme =()=>{
    setThemeMode("ligit");
  }
  const darkTheme =()=>{
    setThemeMode("dark");
  }

  // actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("ligit","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,ligitTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* theme btn */}
        <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card/>
      </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
