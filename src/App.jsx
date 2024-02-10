import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addData } from "./slices/dataSlice";
import courseModel from "./api/api";
import CourseDetails from "./Pages/CourseDetails";


function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData(courseModel))
  }, [])


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
