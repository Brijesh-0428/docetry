import logo from './logo.svg';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Addcategories from './pages/addcategories';
import Managecat from './pages/managecat';
import Uploadevent from './pages/uploadevent';
import Managevent from './pages/mangevent';
import Payment from './pages/payment';
import Orders from './pages/orders';
import User from './pages/user';
import Feedback from './pages/feedback';
import Report from './pages/report';


function App() {
  return (
    <div>
      
      <Router>
        {/* <Login/> */}
     * <Header/>

        <Routes>
          <Route exact path='/' element={<login/>}/>
          <Route exact path='/addcat' element={<Addcategories/>}/>
          <Route exact path='/managecat' element={<Managecat/>} />
          <Route exact path='/uploadcat' element={<Uploadevent/>} />
          <Route exact path='/mangevent' element={<Managevent/>}/>
          <Route exact path='/Payment' element={<Payment/>} />
          <Route exact path='/Order' element={<Orders/>} />
          <Route exact path='/User' element={<User/>} />
          <Route exact path='/Feedback' element={<Feedback/>} />
          <Route exact path='/Report' element={<Report/>}/>
          {/* <Route exact path='/login' element={<Login/>}/> */}
          
        </Routes> 

      </Router>
    </div>
  );
}

export default App;
