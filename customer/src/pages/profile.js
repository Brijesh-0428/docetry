import { useState } from "react";
import axios from "axios";
function Profile()
{
	
	
	
		return(
			<div>
				<div class="container">
		  <ol class="breadcrumb">
			  <li><a href="index.html">Home</a></li>
			  <li class="active">Profile</li>
			 </ol>
		 <div class="registration">
			 <div class="registration_left">
				 <h2> User Profile</h2> 
				  
				 <div class="registration_form">
					<form   >
						<div>
							<label>
								<input placeholder="first name:" id="first" type="text" required  />
							</label>
						</div>
						<div>
							<label>
								<input placeholder="last name:" id="last" type="text"  required />
							</label>
						</div>
						<div>
							<label>
								<input placeholder="address:" id="address" type="text"  required/>
							</label>
						</div>
						<div>
							<label>
								<input placeholder="Mobile:" type="text" id="phoneno" required/>
							</label>
						</div>					
							{/* <div class="sky_form1">
								<ul >
									<li><label class="radio "><input type="radio" name="gender"/><i></i>Male</label></li>
									<li><label class="radio"><input type="radio" name="gender" /><i></i>Female</label></li>
									<div class="clearfix"></div>
								</ul>
							</div> */}
							<div>
							<label>
								<input placeholder="email address:" id="email" type="email"  required/>
							</label>
						</div>				
						{/* <div>
							<label>
								<input placeholder="password" type="password" id="password" tabindex="4" required/>
							</label>
						</div>						 */}
						{/* <div>
							<label>
								<input placeholder="retype password" type="password" id="conpassword" tabindex="4" required/>
							</label>
						</div>	 */}
						{/* <div>
							<input type="submit" value="create an account" id="register-submit"/>
						</div> */}
						
					</form>
				 </div>
			 </div>
			 <div class="registration_left">
				 <h2>User password Chnage</h2>
				 <div class="registration_form">
					<form id="registration_form" action="contact.php" method="post">
						<div>
							<label>
								<input placeholder="Old Password" type="password" tabindex="3" required/>
							</label>
						</div>
						<div>
							<label>
								<input placeholder="New Password" type="password" tabindex="4" required/>
							</label>
						</div>						
						<div>
							<input type="submit" value="sign in" id="register-submit"/>
						</div>
						<div class="forget">
							<a href="#">forgot your password</a>
						</div>
					</form>
				 </div>
			 </div>
			 <div class="clearfix"></div>
		 </div>
	</div>
			</div>
	)
	}
export default Profile