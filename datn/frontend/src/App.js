import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutUI from './layouts/LayoutUI';
import Home from './pages/frontend/Home';
import Login from './pages/frontend/login';
import Register from './pages/frontend/register';
import ProductDetail from './pages/frontend/Home/Product/ProductDetail';

import Cart from './pages/frontend/cart';
import Template from './pages/frontend/register/template';
import UserAccount from './pages/frontend/useraccount';
import ForgotPassword from './pages/frontend/ForgotPassword';
import Checkout from './pages/frontend/checkout';
import Blog from './pages/frontend/blog/Blog';
import CheckAuth from './auth/CheckAuth';
import LoginSuccess from './auth/LoginSuccess';
import Wishlist from './pages/frontend/wishlist';
import PostDetailItem from './pages/frontend/blog/postItemDetail';
import Contact from './pages/frontend/contact';
import Collections from './pages/frontend/product/Collections';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutUI />}>
          <Route index={true} path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-success/:userId?/:provider?' element={<LoginSuccess />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/product/:product_slug_id' element={<ProductDetail />} />
          {/* <Route path='/product-list' element={<ProList/>} /> */}
          <Route path='/collections?/:category0_slug?/:category1_slug?/:category2_slug' element={<Collections/>} />

          <Route path='/gio-hang' element={<Cart />} />
          <Route path='/template' element={<Template />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog/:slug_id' element={<PostDetailItem/>} />
          <Route path='/wish-list' element={<Wishlist />} />

          <Route path='/' element={<CheckAuth/>}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/profile' element={<UserAccount />} />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  );
}


export default App;
