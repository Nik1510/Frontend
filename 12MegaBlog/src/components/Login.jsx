import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux";
import authService from '../../appwrite/Auth'
import {useForm} from 'react-hook-form'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const [error,setError] = useState("");

    // information will be submitted and back and forth so 
    // async method will be used
    const login = async(data)=>{
        // console.log(data)
        setError(""); // as soon the form start taking information the error should empty the error
        try {
            const session =await authService.login(data) ;
            if (session) {
                const userData =await authService.getCurrentUser();
                // if we get the userData
                if (userData) {
                    useDispatch(authLogin(userData));
                    // if the user is logged in redirect the user to root
                    navigate("/") // it authomatically redirect 
                }
            }
        } catch (error) {
            setError(error.message);
        }

    }

  return (
    <div 
        className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10`}>
        <span className='inline-block w-full max-w-[100px]'>
            <Logo width='100%'/>
        </span>
        </div>
        <h2
        className='text-center text-2xl font-bold leading-tight'
        > Sign in Your account 
        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have any account?&nbsp;
            <Link
                to="/signup"
                className='font-medium text-primary transition-all duration-200
                hover:underline'
            >
                Sign Up
            </Link>
        </p>
    {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
    // handleSubmit is a key word
    <form  onSubmit={handleSubmit(login)} className='mt-8'>
        <div className='space-y-5'>
            <Input
                label="Email:"
                placeholder="Enter your email"
                type="email"
                // here spreading register is important
                {...register("email",{
                    required:true,
                    validate:{
                        matchPattern: (value) =>
                            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
                            "Email address must be a valid address",
                    }
                })}
            />
            <Input
                label="Password :"
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                    validate:{
                        matchPattern: (value) =>
                         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value)||
                            "Password must be 8+ chars, with uppercase, lowercase, number & symbol",
                    }
                })}
            />
            <Button
                type='submit'
                className='w-full'
            > Sign in</Button>
        </div>
    </form>
    </div>
  )
}

export default Login