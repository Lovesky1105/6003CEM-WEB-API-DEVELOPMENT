import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import DrinksPage from './pages/DrinksPage';
import RecipePage from './pages/RecipePage';
import FoodPage from './pages/FoodPage';
import ProfilePage from './pages/ProfilePage';
import Login from './components/login_component';
import SignUp from './components/signUp_component';

import reportWebVitals from './reportWebVitals';

import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
 } from "react-router-dom";



 const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
   },

   {
    path: "SignUp",
    element: <SignUp/>,
  },

   {
    path: "login",
    element: <Login/>,
  },

   {
     path: "home",
     element: <HomePage/>,
   },

   {
      path: "drinks",
      element: <DrinksPage/>,
    },

    {
      path: "recipe",
      element: <RecipePage/>,
    },

    {
      path: "food",
      element: <FoodPage/>,
    },

    {
      path: "profile",
      element: <ProfilePage/>,
    },

 ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
