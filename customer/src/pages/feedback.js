import axios from "axios";
import React from "react";
function Feedback()
{
   
        function submitfb(){
            var yourname = document.getElementById('name').value;

            var email =  document.getElementById('email').value;

            var Feedback = document.getElementById('fb').value;

            var decription = document.getElementById('desc').value;

            axios.post("http://localhost:1137/api/fb",{yourname1:yourname,email1:email,Feedback1:Feedback,decription1:decription}).then((Response)=>{
alert("Completed Feedback")
            })

        }
    
    return(
        <div>
            <div class="container">
	  <ol class="breadcrumb">
		  <li><a href="index.html">Home</a></li>
		  <li class="active">Account</li>
		 </ol>
	 <div class="registration">
		 <div class="registration_left">
			 <h2>Our contact </h2>
			  
			 <div class="registration_form">
				<form id="registration_form" action="contact.php" method="post">
					<div>
                        <h4>If you're looking to contact professionals for your birthday party and marriage anniversary celebrations, start by conducting a thorough online search. Utilize search engines, social media platforms, and online directories to identify businesses and professionals specializing in event planning, catering, photography, and related services. Additionally, consider reaching out to wedding and event planners who often cover both birthday and anniversary events. Explore local community centers, halls, and businesses in your area. Once you've identified potential contacts, visit their websites or social media profiles for contact details. Be clear about your requirements, budget, and preferences when initiating communication. Personal recommendations from friends or family can also be valuable in finding reliable and trusted services. Whether through emails, phone calls, or online forms, reach out to these professionals to discuss your vision for both the birthday party and marriage anniversary, ensuring a personalized and memorable celebration.</h4>
                    </div>

                    <div>
                        <h3>Phone No:+91 9898421841</h3>
                    </div>
					
				</form>
			 </div>
		 </div>
		 <div class="registration_left">
			 <h2>Give Feedback</h2>
			 <div class="registration_form">
				<form onSubmit={()=>submitfb()}>
					<div>
						<label>
							<input placeholder="Your name" type="text" id="name" required/>
						</label>
					</div>
					<div>
						<label>
							<input placeholder="Email" type="Email" id="email" required/>
						</label>
					</div>	
                    <div>
                        <label>
                            <input placeholder="Feedback" type="text" id="fb" required/>
                            </label>    
                    </div>
                    <div>
                        <label>
                            <input placeholder="decription" type="text" id="desc" required />
                        </label>
                        </div>				
					<div>
						<input type="submit" value="submit" id="register-submit"/>
					</div>
					
				</form>
			 </div>
		 </div>
		 <div class="clearfix"></div>
	 </div>
</div>
        </div>
)
}export default Feedback