import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import ParcelDetails from './pages/ParcelDetails.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import HomePage from './pages/HomePage.jsx';
import Cart from './components/Cart.jsx';
import CreateOrder from './components/CreateOrder.jsx';
import PaymentPage from './components/Paymentpage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<App />}>
          {/* Child Routes */}
          <Route index element={<Home />} /> {/* Default Route */}
          <Route path="login" element={<Login />} />
          <Route path="order/:order1" element={<ParcelDetails />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="homePage" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="create-order" element={<CreateOrder />} />
          <Route path="payment-page" element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
