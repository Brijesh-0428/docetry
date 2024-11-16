
import React,{ useRef, useEffect, useState } from "react";
import "metismenu";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
function Header(){

	// let location = useLocation();
	// var event  = location.state.name;
	// const [list,Setlist]=useState([''])
	// useEffect(()=>{
	// 	axios.get("http:localhost:1137/api/event_diff",{params:{id:event}}).then((Response)=>{
	// 		Setlist(Response.data)
	// 	},[])
	// })
	const[event,eventlist]=useState(['']);
	const [displayStyle, setDisplayStyle] = useState({ display: 'none' });
	let user = JSON.parse (sessionStorage.getItem("user_data"));
	const [isDropdownVisible, setDropdownVisible] = useState(false);

    const showMenu = () => {
        setDropdownVisible(true);
    };

    const hideMenu = () => {
        setDropdownVisible(false);
    };
	useEffect(()=>{
        axios.get("http://localhost:1137/api/addeventcat",).then((Response)=>{
			console.log(Response.data)
            eventlist(Response.data);
        },[])
    },[])


function logout(){
	sessionStorage.clear();
	window.location="/login"
}
    return(
        <div>
<div class="top_bg">
	<div class="container">
		<div class="header_top-sec">
			<div class="top_right">
				<ul>
					<li><a href="#">help</a></li>|
					<li><a href="/contact">Contact</a></li>|
					<li><a href="login.html">Track Order</a></li>
				</ul>
			</div>
			<div class="top_left">
				<ul>
					<li class="top_link">Email:<a href="mailto:info@example.com">rishi46465773@gmail.com</a></li>|
					<li class="top_link"><a href="/login">My Account</a></li>			 		
				</ul>
			</div>
				<div class="clearfix"> </div>
		</div>
	</div>
</div>
<div class="header-top">
	 <div class="header-bottom">
		 <div class="container">			
				<div class="logo">
					<a href="index.html"><h1>Decorty</h1></a>
				</div>
		
		 
			 <div class="top-nav">
				<ul  class="memenu skyblue"><li class="active"><a href="/">Home</a></li>
				<li className="grid" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
            <a href="/Event">Events</a>
            <div 
                className="mepanel" 
                style={{ display: isDropdownVisible ? 'block' : 'none' }} 
                onMouseEnter={showMenu} 
                onMouseLeave={hideMenu}
            >
                <div className="row">
                    <div className="col1 me-one">
                        <h4>Decoration Photos</h4>
                        <ul>
						{event.map((vals, index) => (
                        <li key={index}>
						<Link to={`/Event/${vals.cid}`}>
                {vals.name?.toUpperCase() || 'Unknown Event'}
            </Link>
                        </li>
                    ))}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
					<li class="grid"><a href="/mybookings">My Bookings</a>
						
					</li>
					<li class="grid"><a href="/feedback">Contact Us</a></li>
{sessionStorage.getItem("user_data")== null ?
<>
<li class="grid"><a href="/account">registration</a></li>
</>
:
<>
<li class="grid"><a href="/profile">{user.name}</a></li>
<li class="grid"><button onClick={logout}>logout</button></li>
</>


}
                   
				</ul>
				<div class="clearfix"> </div>
			 </div>
			 
			 {/* <div class="top-nav">
				<ul class="memenu skyblue"></ul><li class="active1"><a href="/profile">PROFILE</a></li>
			 </div> */}
			
			  <div class="cart box_1">
				 <a href="/Cart">
					<h3> <div class="total">
					<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)</div>
					<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></h3>
				</a>
				<p><a href="javascript:;" class="simpleCart_empty">Cart</a></p>
			 	<div class="clearfix"> </div>
			 </div>  
			 <div class="clearfix"> </div>
					 
			 </div>
			<div class="clearfix"> </div>
			
	  </div>
</div>
        </div>
    )
} export default Header