import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import CreateNewsUser from './components/CreateNewsUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <Users ></Users>,
        loader: ()=> fetch(`http://localhost:5000/users`)
      },
      {
        path: "/newUser",
        element: <CreateNewsUser ></CreateNewsUser>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
