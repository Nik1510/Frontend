import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Signup } from './components/index.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLayout authencation={false}>
            <Login/>
          </AuthLayout>
        ),
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authencation={false}>
            <Signup/>
          </AuthLayout>
        ),
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authencation={true}>
            {""}
          </AuthLayout>
        ),
      },
      {
        path:'/add-post',
        element:(
          <AuthLayout authencation={true}>
            {" "}
          </AuthLayout>
        ),
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authencation={true}>
            {""}
          </AuthLayout>
        ),
      },
      {
        path:'/post/:slug',
        element:<Post/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
