import React ,{ useRef } from "react";
function Header()
{
	const layoutRef=useRef(null);
	const refs=useRef(null);

	const handleclick=(ref)=>{
		if(ref?.current?.className.includes('show')){
		
			ref.current.className='collapse';
		}
		else{
		
			ref.current.className='collapse show';
		}
		
			}


			const handelseccli=(refs)=>{
				if(refs?.current?.className.includes('show')){
				
					refs.current.className='collapse';
				}
				else{
				
					refs.current.className='collapse show';
				}
				
					}
    return(
            <div class="main-content">
		<div class=" sidebar" role="navigation">
            <div class="navbar-collapse">
				<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
					<ul class="nav" id="side-menu">
						<li>
						<a href="index.html" class="active"><i class="fa fa-home nav_icon"></i>Dashboard</a>
						</li>
						<li>
						<a href="#" onClick={()=> handleclick(layoutRef)}><i class="fa fa-cogs nav_icon"></i>Category<span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse"  ref={layoutRef}>
								<li>
									<a href="/addcat" style={{marginRight:"5px",marginLeft:"55px"}}>Add Category</a>
								</li>
								<li>
									<a href="/managecat" style={{marginRight:"5px",marginLeft:"55px"}}>Manage Category</a>
								</li>
							</ul>
			
						</li>
						<li > 
							<a href="#"  onClick={()=> handelseccli(refs)}><i class="fa fa-book nav_icon"></i>Event<span class="fa arrow"></span></a> 
							 <ul class="nav nav-second-level collapse" ref={refs}> 
								 <li> 
									<a href="/uploadcat" style={{marginRight:"5px",marginLeft:"55px"}}>Upload Event</a> 
								
								</li> 
								<li> 
									<a href="mangevent" style={{marginRight:"5px",marginLeft:"55px"}}>Manage Event</a> 
									
								 </li>
							 </ul> 
							 
						</li>
						<li>
							<a href="/Payment"><i class="fa fa-th-large nav_icon"></i>Payment </a>
						</li>
						<li>
							<a href="/Order"><i class="fa fa-envelope nav_icon"></i>Orders</a>
			
						</li>
						<li>
							<a href="/User"><i class="fa fa-table nav_icon"></i>User</a>
						</li>
						<li>
							<a href="/Feedback"><i class="fa fa-check-square-o nav_icon"></i>Feedback</a>
							{/* <ul class="nav nav-second-level collapse">
								<li>
									<a href="forms.html">Team Manage<span class="nav-badge-btm">07</span></a>
								</li>
								<li>
									<a href="validation.html">Manage Customer</a>
								</li>
							</ul> */}
	
						</li>
						<li>
							<a href="/Report"><i class="fa fa-file-text-o nav_icon"></i>Report</a>
							<ul class="nav nav-second-level collapse">
								<li>
									<a href="login.html">Login</a>
								</li>
								 {/* <li>
									<a href="signup.html">SignUp</a>
								</li> */}
								 
							</ul>
							
						</li>
						{/* <li>
							<a href="charts.html" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>Charts <span class="nav-badge-btm pull-right">new</span></a>
						</li> */}
					</ul>
					<div class="clearfix"> </div>
					
				</nav>
			</div>
		</div>
		
		<div class="sticky-header header-section ">
			<div class="header-left">
				
				<button id="showLeftPush"><i class="fa fa-bars"></i></button>

				<div class="logo">
					<a href="index.html">
						<h1>Decorty</h1>
						<span>AdminPanel</span>
					</a>
				</div>
				
				<div class="search-box">
					<form class="input">
						<input class="sb-search-input input__field--madoka" placeholder="Search..." type="search" id="input-31" />
						<label class="input__label" for="input-31">
							<svg class="graphic" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
								<path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
							</svg>
						</label>
					</form>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="header-right">
				<div class="profile_details_left">
					<ul class="nofitications-dropdown">
						<li class="dropdown head-dpdn">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-envelope"></i><span class="badge">3</span></a>
							<ul class="dropdown-menu">
								<li>
									<div class="notification_header">
										<h3>You have 3 new messages</h3>
									</div>
								</li>
								<li><a href="#">
								   <div class="user_img"><img src="" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet</p>
									<p><span>1 hour ago</span></p>
									</div>
								   <div class="clearfix"></div>	
								</a></li>
								<li class="odd"><a href="#">
									<div class="user_img"><img src="" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet </p>
									<p><span>1 hour ago</span></p>
									</div>
								  <div class="clearfix"></div>	
								</a></li>
								<li><a href="#">
								   <div class="user_img"><img src="images/3.png" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet </p>
									<p><span>1 hour ago</span></p>
									</div>
								   <div class="clearfix"></div>	
								</a></li>
								<li>
									<div class="notification_bottom">
										<a href="#">See all messages</a>
									</div> 
								</li>
							</ul>
						</li>
						<li class="dropdown head-dpdn">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-bell"></i><span class="badge blue">3</span></a>
							<ul class="dropdown-menu">
								<li>
									<div class="notification_header">
										<h3>You have 3 new notification</h3>
									</div>
								</li>
								<li><a href="#">
									<div class="user_img"><img src="images/2.png" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet</p>
									<p><span>1 hour ago</span></p>
									</div>
								  <div class="clearfix"></div>	
								 </a></li>
								 <li class="odd"><a href="#">
									<div class="user_img"><img src="images/1.png" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet </p>
									<p><span>1 hour ago</span></p>
									</div>
								   <div class="clearfix"></div>	
								 </a></li>
								 <li><a href="#">
									<div class="user_img"><img src="images/3.png" alt=""/></div>
								   <div class="notification_desc">
									<p>Lorem ipsum dolor amet </p>
									<p><span>1 hour ago</span></p>
									</div>
								   <div class="clearfix"></div>	
								 </a></li>
								 <li>
									<div class="notification_bottom">
										<a href="#">See all notifications</a>
									</div> 
								</li>
							</ul>
						</li>	
						<li class="dropdown head-dpdn">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-tasks"></i><span class="badge blue1">15</span></a>
							<ul class="dropdown-menu">
								<li>
									<div class="notification_header">
										<h3>You have 8 pending task</h3>
									</div>
								</li>
								<li><a href="#">
									<div class="task-info">
										<span class="task-desc">Database update</span><span class="percentage">40%</span>
										<div class="clearfix"></div>	
									</div>
									<div class="progress progress-striped active">
										<div class="bar yellow" ></div>
									</div>
								</a></li>
								<li><a href="#">
									<div class="task-info">
										<span class="task-desc">Dashboard done</span><span class="percentage">90%</span>
									   <div class="clearfix"></div>	
									</div>
									<div class="progress progress-striped active">
										 <div class="bar green" ></div>
									</div>
								</a></li>
								<li><a href="#">
									<div class="task-info">
										<span class="task-desc">Mobile App</span><span class="percentage">33%</span>
										<div class="clearfix"></div>	
									</div>
								   <div class="progress progress-striped active">
										 <div class="bar red" ></div>
									</div>
								</a></li>
								<li><a href="#">
									<div class="task-info">
										<span class="task-desc">Issues fixed</span><span class="percentage">80%</span>
									   <div class="clearfix"></div>	
									</div>
									<div class="progress progress-striped active">
										 <div class="bar  blue" ></div>
									</div>
								</a></li>
								<li>
									<div class="notification_bottom">
										<a href="#">See all pending tasks</a>
									</div> 
								</li>
							</ul>
						</li>	
					</ul>
					<div class="clearfix"> </div>
				</div>
		
				<div class="profile_details">		
					<ul>
						<li class="dropdown profile_details_drop">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
								<div class="profile_img">	
									
									<div class="user-name">
										<p>Rishi</p>
										<span>Administrator</span>
									</div>
									<i class="fa fa-angle-down lnr"></i>
									<i class="fa fa-angle-up lnr"></i>
									<div class="clearfix"></div>	
								</div>	
							</a>
							<ul class="dropdown-menu drp-mnu">
								<li> <a href="/login"><i class="fa fa-cog"></i> login</a> </li> 
								<li> <a href="#"><i class="fa fa-user"></i> Profile</a> </li> 
								<li> <a href="#"><i class="fa fa-sign-out"></i> Logout</a> </li>
							</ul>
						</li>
					</ul>
				</div>	
				<div class="clearfix"> </div>	
			</div>
			<div class="clearfix"> </div>	
		</div>
        </div>
    )
}export default Header