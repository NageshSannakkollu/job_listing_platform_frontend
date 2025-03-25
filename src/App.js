import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/LandingPage"
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import JobDetailsPage from './components/JobDetailsPage'
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AddJobDetails from './components/AddJobDetails'
import UpdateJob from './components/UpdateJob'
import UsersList from './components/UsersList'


import "./App.css"


const App = () => (
    <BrowserRouter>
    <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/register' element={<RegisterPage/>} />
        <Route exact path='/jobDetails/:id' element={<JobDetailsPage/>} />
        <Route exact path="/addJob" element={<AddJobDetails/>}/>
        <Route exact path='/update/:id' element={<UpdateJob/>} />
        <Route exact path="/users_list" element={<UsersList/>} />
      </Routes>
    </BrowserRouter>
  )


export default App