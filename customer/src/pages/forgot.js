import axios from "axios";
import React from "react";
function Forgot(){
	function SendEmail(){
		var email = document.getElementById('Email').value;
		axios.post("http://localhost:1137/api/sendemail",{email:email}).then((Response)=>{
			if(Response.data.msg){
				alert(Response.data.msg);
			}else{
				alert("email sent sucessfully");
			}	
		})
	}
    return(
        <div class="login_sec">
	            <div class="container">
		            <ol class="breadcrumb">
		            <li><a href="index.html">Home</a></li>
		            <li class="active">Forgot</li>
		            </ol>
		            <h2>Forgot Password</h2>
		            <div class="col-md-6 log">			 
					<form >
					        <h5>Email Your Email</h5>	
					        <input type="text" id="Email"/>
					        {/* <h5>Password:</h5>
					        <input type="password" id="pass" />					 */}

					        <button style={{color:"green"}} onClick={SendEmail}>Send Email</button>	

					        {/* <a class="acount-btn" href="account.html">Create an Account</a> */}
				        </form>
				         
					</div>
					<div class="col-md-6 log">	
					<img src="assets/images/login1.jpg" alt=""/>
					</div>
		 
	
	 </div>
</div>
    )
}export default Forgot



// con.query(ins8,[userid,ffid],(err,result)=>{
// 	if(result.length > 0)
// 	{
// 		response.send({msg:"you are already saved in your cart"});
		
// 	}
// 	else{
// 		const ins9 = "insert into add_cart (pro_id,user_id) values(?,?)"

// 		con.query(ins9,[userid,ffid])
		
// 		response.send();

// 	}

// })