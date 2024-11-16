import React from "react";
function Home()
{
    return(
    <div>
<div class="banner">
	 <div class="container">
	 </div>
</div>

<div class="welcome">
	<div class="container">
		<div class="col-md-3 welcome-left">
			<h2>Exclusive Deals</h2>
		</div>
		<div class="col-md-9 welcome-right">
			<h3>Discover Unbeatable Offers for Every Occasion!</h3>
			<p>
				Explore amazing deals tailored to meet your needs. From seasonal discounts to exclusive promotions, 
				we have something for everyone. Whether you're shopping for essentials, planning a celebration, 
				or simply treating yourself, our curated offers ensure you get the best value. Don’t miss out on these 
				limited-time deals and start saving today!
			</p>
		</div>
	</div>
</div>


<div class="bride-grids">
	 <div class="container">
		 <div class="col-md-4 bride-grid">
			 <div class="content-grid l-grids">
				 {/* <figure class="effect-bubba"> */}
						<img src="assets/images/home.jpg" alt=""/>
						{/* <figcaption>
							<h4>Nullam molestie </h4>
							<p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
						</figcaption>			  */}
				 {/* </figure> */}
				 <div class="clearfix"></div>
				 <h3>birthday party</h3>
			 </div>
			 <div class="content-grid l-grids">
				 {/* <figure class="effect-bubba"> */}
						<img src="assets/images/marriage.jpg" alt=""/>
						{/* <figcaption>
							<h4>Nullam molestie </h4>
							<p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
						</figcaption>			 */}
				 {/* </figure>	 */}
				 <div class="clearfix"></div>
				 <h3>marriage anniversary</h3>
			 </div>
		 </div>
		 <div class="col-md-4 bride-grid">
				<div class="content-grid l-grids">
						<img src="assets/images/birthday.jpg" alt="" style={{height:"550px"}}/>
						
				 <h3>Birthday</h3>
			 </div>
		 </div>
		 <div class="col-md-4 bride-grid">
			 <div class="content-grid l-grids">
				 {/* <figure class="effect-bubba"> */}
						<img src="assets/images/marriage1.jpg" alt="" style={{height:"550px",width:"490px"}}/>
						{/* <figcaption>
							<h4>Nullam molestie </h4>
							<p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
						</figcaption>			 */}
				 {/* </figure>	 */}
				 <div class="clearfix"></div>
				 <h3>Wedding</h3>
			 </div>
			 {/* <div class="content-grid l-grids">
				 <figure class="effect-bubba">
						<img src="assets/images/decorations1.jpg" alt="" />
						<figcaption>
							<h4>Nullam molestie </h4>
							<p>In sit amet sapien eros Integer in tincidunt labore et dolore magna aliqua</p>																
						</figcaption>			
				 </figure>
					<div class="clearfix"></div>
				 <h3>Most Beautiful</h3>
			 </div> */}
		 </div>
		 <div class="clearfix"></div>
	 </div>
</div>
    </div>)
} export default Home