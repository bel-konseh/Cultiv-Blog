
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import BlogPost from './pages/BlogPost'

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route pathname = "/" element={<Layout />}>
      
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="login/" element={<Login />} />
      <Route path="signup/" element={<SignUp />} />
      <Route path="profile/" element={<Profile />} />
      <Route path="blogpost/" element={<BlogPost />} />

    </Route>
  )
)
  return (
    <>
       <RouterProvider router={router} /> 
    </>
  )
}

export default App
