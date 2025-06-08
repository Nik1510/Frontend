import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate, useNavigation} from 'react-router-dom'

export default function Protected({children,authencation=true}) {

    const navigate = useNavigate();
    const[loader,setLoader] = useState(true);
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        // important
        // true && false!==true
        // TODO make it more easy

        // if (authStatus===true) {
        //     navigate("/")
        // }
        // else if(authStatus===false){
        //     navigate("/login")
        // }
        
        if (authencation && authStatus!==authencation) {
            navigate("/login")
        }
        else if (!authencation && authStatus!==authencation) {
            navigate("/");
        }
        setLoader(false)
    },[authStatus,navigate,authencation])

  return loader?<h1>Loading...</h1> :<>(children)</>
}
