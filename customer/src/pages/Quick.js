import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Quick()
{
    
let location = useLocation();
var ph = location.state.id;
const [list, Setlist]=useState([''])
useEffect(()=>{
    axios.get("http://localhost:1137/api/main_event",{params:{id:ph}}).then((Response)=>{
        Setlist(Response.data)
   
           },[])
})
function savelater(fid)

{
	 alert(fid)
	let user = JSON.parse(sessionStorage.getItem("user_data"))
 let u_id = user? user.id: null;
	 alert(u_id)

	axios.post("http://localhost:1137/api/event",{uid:u_id,fd:fid}).then
	((Response)=>{
		if(Response.data.msg)
		{
			alert(Response.data.msg);
			window.location = "/quick";
		}
		else{
			alert("add to cart successfully");
			//  window.location = "/quick";
		}

	})
}


    return(
<div>
        {list.map((val)=>{
            return(
        <div class="single-sec">
	 <div class="container">
		 <ol class="breadcrumb">
			 <li><a href="index.html">Home</a></li>
			 <li class="active">Products</li>
		 </ol>
		 <div class="col-md-12 det">
				 <div class="single_left">
					 <div class="flexslider">
							<ul class="slides">
								<li data-thumb="images/s11.jpeg">
									<img src={"http://localhost:1137/public/"+ val.ph_img1} style={{height:"400px"}}/>
								</li>
								{/* <li data-thumb="images/s22.jpeg">
									<img src="images/s22.jpeg" />
								</li>
								<li data-thumb="images/s33.jpeg">
									<img src="images/s33.jpeg" />
								</li>
								<li data-thumb="images/s44.jpeg">
									<img src="images/s44.jpeg" />
								</li> */}
							</ul>
						</div>
						  <script defer src="js/jquery.flexslider.js"></script>
						<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

							
				 </div>
				  <div class="single-right">
					 <h3>{val.ph_name}</h3>

					 <div class="single-bottom1">
						<h6>Details</h6>
						<p class="prod-desc">{val.ph_desc}</p>
					 </div>	
					 <div class="single-bottom1">
						<h6>Book Orders</h6>
						</div>
					 {/* <div class="id"><h4>{val.ph_id}</h4></div> */}
					  <form action="" class="sky-form">
						     <fieldset>					
							   <section>
							     <div class="rating">
									<input type="radio" name="stars-rating" id="stars-rating-5"/>
									
                                    <label for="stars-rating-5"><i class="icon-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-4"/>
									<label for="stars-rating-4"><i class="icon-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-3"/>
									<label for="stars-rating-3"><i class="icon-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-2"/>
									<label for="stars-rating-2"><i class="icon-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-1"/>
									<label for="stars-rating-1"><i class="icon-star"></i></label>
									<div class="clearfix"></div>
								 </div>
							  </section>
						    </fieldset>
					  </form>
					  <div class="cost">
						 <div class="prdt-cost">
							 <ul>
								 <li>MRP: <del>10000</del></li>								 
								 <li>Sellling Price:</li>
								 <li class="active">Rs:{val.ph_price} </li>
								 <Link to ="/Book"  state ={{id: val.ph_id}}>BUY NOW</Link>
								 
							 </ul>
						 </div>
						 <div class="check">
							 
							 <form class="navbar-left" role="search">
							 <div class="cart box_1 ">
				 				<a href="/Cart" >
									{/* <h3> <div class="total">
									<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)</div> */}
								<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
								{/* </h3> */}
								<button type="button" id="button" class="btn btn-default"  onClick={(e)=>savelater(val.ph_id)} >Save for later</button>
				</a>
			 </div> 	  
							 </form>
						 </div>
						 <div class="clearfix"></div>
					  </div>
					 
					  {/* <div class="single-bottom1">
						<h6>Details</h6>
						<p class="prod-desc">{val.ph_desc}</p>
					 </div>					  */}
				  </div>
				  <div class="clearfix"></div>
					{/* <div class="sofaset-info">
						 <h4>Product Summary: American Diamond Famina Ruby Copper, Brass Jewel Set</h4>
						  <ul>
							 <li>Classic and vibrant detailing</li>
							 <li>Design: Exquisitely crafted necklace set to suit your festive mood</li>
							 <li>Stones Used: Synthetic stones and beads</li>
							 <li>Colour: Brown Jute, Sheron Brown</li>
							 <li>Recommended Wear: Festive</li>
							 <li>Note: The image has been enlarged for better viewing</li>
							 <li>Contents: 4 Pc</li>
							 <li>Delivery Time: 7 to 10 days from the Day of Dispatch</li>							 
						 </ul> 
				  </div> */}
                  </div>
                  </div>
                  </div>

)
})} 
</div>)                      
}export default Quick