import React from 'react'
import { Container,Logo,LogoutBtn } from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-router-dom';

function Header() {
  // useSelector will ask the redux 
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate();

  const navItem =[
    {
      name:'Home',
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/signup",
      active:!authStatus,
    },
    {
      name:"SignUp",
      slug:"/signup",
      active:!authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus
    }
  ]
  

  return (
    <h1 className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItem.map((item)=>
            item.active? (
              <li key={item.name}>
                <button
                  onClick={()=>(navigate(item.slug))}
                  className='inline-block px-6 py-2
                  duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ):null
            )}
            
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </h1>
  )
}

export default Header