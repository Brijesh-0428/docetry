import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Account from './pages/account';
import Login from './pages/login';
import Contact from './pages/contact';
import Feedback from './pages/feedback';
import Profile from './pages/profile';
import Payment from './pages/payment';
import Event from './pages/event';
import Quick from './pages/Quick';
import Cart from './pages/cart';
import Book from './pages/book';
import Marriage from './pages/marriage';
import Forgot from './pages/forgot';
import Mybookings from './pages/mybookings';
function App() {
  const [cartCount, setCartCount] = useState(0);

  // Function to increment cart count
  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div className="App">
<Router>
<Header/>

<Routes>

  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/account' element={<Account/>} />
  <Route exact path='/login' element={<Login/>} />
  <Route exact path='/contact' element={<Contact/>} />
  <Route exact path='/payment' element={<Payment/>} />
  <Route exact path='/feedback' element={<Feedback/>} />
  <Route exact path='/profile' element={<Profile/>} />
  <Route exact path='/Event' element={<Event/>} />
  <Route exact path='/Event/:id' element={<Event/>} />
  <Route exact path='/quick' element={<Quick/>} />
  <Route export path='/Cart' element={<Cart/>} />
  <Route export path='/Book' element={<Book/>}/>
  <Route exact path=' ' element={<Marriage/>}/>
  <Route exact path='/forgot' element={<Forgot/>}/>
  <Route exact path='/mybookings' element={<Mybookings/>}/>
</Routes>



  <Footer/>


</Router>

 
    </div>
  );
}

export default App;