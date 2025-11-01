
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import Profile from './pages/Profile'
import BlogPost from './pages/BlogPost/BlogPost'
import CreatePost from './pages/CreatePost'
import ContinueToLogin from './pages/To Login/ContinueToLogin'


function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route pathname = "/" element={<Layout />}>
      
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="login/" element={<LoginPage />} />
      <Route path="signup/" element={<SignUpPage />} />
      <Route path= "tologin/" element={<ContinueToLogin />} />
      <Route path="profile/" element={<Profile />} />
      <Route path="blogpost/:articleId" element={<BlogPost />} />
      <Route path="/create-post" element={<CreatePost />} />

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
