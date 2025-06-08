import React,{useState } from 'react'
import authService from '../../appwrite/Auth'
import { useNavigate,Link } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate
    const [error,setError] =useState("");
    const dispatch = useDispatch();
    const {register, handleSubmit} =useForm();

    const create = async(data)=>{
        setError("");
        try {
            const userData= await authService.createAccount(data);
            if (userData) {
                const userData =await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center '>
        <div className={`mx-2 flex justify-center`}>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
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
                    <form onSubmit={handleSubmit(create)}>
                        <div className='space-y-5'>
                            <Input
                                label="Full Name:"
                                placeholder="Enter your full name"
                                {...register("name",{
                                    required:true,
                                })}
                            />
                        </div>
                    </form>
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
                                type="submit"
                                className='w-full'>Create Account</Button>
        </div>

    </div>
  )
}

export default Signup