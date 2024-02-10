import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CourseDetails from "./Pages/CourseDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
import Dashboard from "./Pages/Dashboard.jsx";
import Select from "./Pages/Select.jsx";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home />} />
    <Route path="course/:courseId" element={<CourseDetails />} />
    <Route path="select" element={<Select />} />
    <Route path="select/:studentId" element={<Dashboard />} />
    <Route />
  </Route>
))




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
