import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import ParcelDetails from './pages/ParcelDetails.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import HomePage from './pages/HomePage.jsx';
import Cart from './components/Cart.jsx';
import CreateOrder from './components/CreateOrder.jsx';
import PaymentPage from './components/Paymentpage.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   }
// 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order/:order1' element={<ParcelDetails />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
         <Route path='/homePage' element={<HomePage />} />
         <Route path='/Cart' element={<Cart />} />
         <Route path='/Create-order' element={<CreateOrder />} />
         <Route path='/Payment-page' element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>
);

