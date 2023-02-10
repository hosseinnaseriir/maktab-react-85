import React, { useEffect, useState } from 'react';
import { AddProductScreen, LoginScreen, ProductsListScreen, RegisterScreen, SingleProduct } from '@/screens';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import HomeScreen from './screens/home';
import { MainLayout } from './layout';
import { useSelector } from 'react-redux';

export const routes = [
  {
    name: "Home",
    path: '/',
    element: <HomeScreen />
  },
  {
    name: "Products",
    path: '/products',
    element: <ProductsListScreen />
  },
  {
    name: "Add Products",
    path: '/products/add',
    element: <AddProductScreen />
  },
  {
    hide: true,
    name: "Single Products",
    path: '/products/:id',
    element: <SingleProduct />
  },
  {
    name: "About",
    path: '/about',
    element: <HomeScreen />
  },
]

export const publicRoutes = [
  {
    name: "Login",
    path: '/login',
    element: <LoginScreen />
  },
  {
    name: "Register",
    path: '/register',
    element: <RegisterScreen />
  }
]

function App() {

  const products = useSelector((store) => store.products)

  console.log(products)

  return (
    <div className="App">
      <ToastContainer />
      <MainLayout>
        <Routes>
          {[...publicRoutes, ...routes].map(route => (
            <Route exact key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
