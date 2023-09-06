import React from "react";
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Designs from "../Pages/Designs";
import ContactUs from "../Pages/contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Appointments from "../admin/Appointments";
import AddDesigns from "../admin/AddDesigns";
import Users from "../admin/Users";
import AppointmentForm from "../Pages/AppointmentForm"
import AllDesigns from "../admin/AllDesigns";


const Routers = () => {
  return (
    <Routes>
        <Route path = '/' element={<Navigate to= '/home'/>} />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/Designs"  element={<Designs/>}/>
        <Route path="/AppointmentForm"  
        element={<ProtectedRoute>
          <AppointmentForm />
        </ProtectedRoute>}/>
        
      <Route path="/*" element={<ProtectedRoute/>}>
       
        <Route path="dashboard/add-designs"  element={<AddDesigns/>}/>
        <Route path="dashboard/all-designs" element={<AllDesigns/>} />
        <Route path="dashboard/appointments"  element={<Appointments/>}/>
       
        <Route path="dashboard/users"  element={<Users/>}/>

      </Route>
        
       <Route path="dashboard/add-designs"  element={<AddDesigns/>}/>

        <Route path="dashboard/appointments"  element={<Appointments/>}/>
        <Route path="dashboard/all-designs" element={<AllDesigns/>} />
        <Route path="dashboard/users"  element={<Users/>}/>
        
        
        <Route path="/contact"  element={<ContactUs/>}/>
        <Route path="/Login"  element={<Login/>}/>
        <Route path="/Signup"  element={<Signup/>}/>
        
       
    </Routes>
  )
    
};

export default Routers;