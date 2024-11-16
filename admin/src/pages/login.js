import React from "react";
// import "./login.css"
function Login()
{
    return(
        <>
<div>
  

<div class="wrapper">
			<div class="inner">
				<img src="images/image-1.png" alt="" class="image-1"/>
				<form action="">
					<h3>New Account?</h3>
					<div class="form-holder">
						<span class="lnr lnr-user"></span>
						<input type="text" class="form-control" placeholder="Username"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-phone-handset"></span>
						<input type="text" class="form-control" placeholder="Phone Number"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-envelope"></span>
						<input type="text" class="form-control" placeholder="Mail"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control" placeholder="Password"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control" placeholder="Confirm Password"/>
					</div>
					<button>
						<span>Register</span>
					</button>
				</form>
				<img src="images/image-2.png" alt="" class="image-2"/>
			</div>
			
		</div>
		
  </div>
    
    

	
        </>
    )
}
export default Login