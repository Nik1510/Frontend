import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService  from '../appwrite/Auth';
import {login,logout} from "./store/authSlice"
import {Header,Footer} from './components/index'
import { Outlet } from "react-router-dom";

function App() {

  // when-ever a database or network call are made 
  // we prefer the state of loading

  const[loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  // As the application loads take useEffect hook 
  // and ask useEffect is the user logged in or not

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      // here we have to dispatch the userData in authSlice
      if(userData){
        dispatch(login({userData}))
      }else{
        // if the user is not login in 
        // call logout and make state update
        dispatch(logout());
      }
    })
    .catch((err)=>console.log("unable to get CurrentUser ",err))
    .finally(()=>setLoading(false))
  },[])

  // here i can go conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block text-center'>
        <Header/>
        <main>
          Todo
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ):(null)
}

export default App