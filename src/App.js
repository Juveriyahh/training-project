import React from "react";
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
// import Courses from "./Components/Courses";
// import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Courses from "./Components/Courses";
import Register from "./Components/Register";
import RoleSelection from "./Components/RoleSelection";
import Courses from "./Components/Courses";
import AdminPage from "./Components/AdminPage";
import CourseDetails from "./Components/CourseDetails";
import UpdateCourse from "./Components/UpdateCourse";
import Footer from "./Components/Footer";
import MyCourses from "./Components/MyCourses";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>


    {/* <Courses/> */}
    <Router>
    <Navbar/>
    <ToastContainer/>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/user/login" element={<Login/>}></Route>
      <Route path="/admin/login" element={<Login/>}></Route>
      <Route path="/admin/dashboard" element={<AdminPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path="/courses/:id" element={<CourseDetails/>}></Route>
      <Route path="/admin/updateCourse/:id" element={<UpdateCourse/>}></Route>
      <Route path="/courses/mycourses" element={<MyCourses/>}></Route>
    </Routes>
    </div>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
