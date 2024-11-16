import axios from "axios";
import React,{useEffect,useState} from "react";
import { useLocation,Link } from "react-router-dom";
import moment from 'moment';
function Mybookings()
{
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    var count=0;
    var add=0
    
    // const addItemToCart = (item) => {
    //     setCartItems([cartItems, item]);
    //     setTotalPrice(totalPrice + item.ph_price);
    //   }
   
    //   const removeItemFromCart = (item) => {
    //     const updatedCartItems = cartItems.filter((cartItem) => cartItem.ph_id !== item.ph_id);
    //     setCartItems(updatedCartItems);
    //     setTotalPrice(totalPrice - item.ph_price);
    //   }
function pay(id)
{
 const oc_id=id;
//alert(pid);
 axios.post("http://localhost:1137/api/pay",{oc_id:oc_id}).then
	((Response)=>{
        alert(Response.data.msg);
        window.location = "/Cart";
    
    })
}

    let user = JSON.parse(sessionStorage.getItem("user_data"))
 let useid = user? user.id: null;
    const [list, Setlist]=useState([''])
    useEffect(()=>{
        axios.get("http://localhost:1137/api/viewbookings",{params:{id:useid}}).then((Response)=>{
            Setlist(Response.data)
        })
    },[])
    return(
        <div class="bs-example widget-shadow" data-example-id="bordered-table" style={{marginRight:"100px",marginLeft:"100px"}}> 
						<h4>My Bookings</h4>
						<table class="table table-bordered" > <thead> <tr>
                            <th style={{width:"15%"}}>Sr.No:</th> <th style={{width:"15%"}}>Event Image</th> <th style={{width:"20%"}}>Event Name</th>  <th style={{width:"10%"}}>Price</th> <th style={{width:"10%"}}> Date</th> <th style={{width:"3%"}}>Status</th><th style={{width:"10%"}}> Pay</th> </tr>

                         </thead> 
                         
                         
                         <tbody>
                            {list.map((val,index)=>{
                               
                                count=parseInt(count)+parseInt(val.ph_price);

                            

                                return(
                             <tr> 
                                <td>{index+1} </td>
                            <td><img src={"http://localhost:1137/public/"+val.ph_img1} style={{height:"100px"}}/></td> <td>{val.ph_name}</td>


{/* <button type="button" id="book" class="btn btn-default"  onClick={(e)=>remove(val.cart_id)}  >Book</button>  */}
 <td>{val.ph_price} </td>
 <td>{moment(val.eventdate).format('DD/MM/YYYY')}</td>
<td><div class="prdt-cost">
							 <ul>
								 {/* <Link to = "/Book" state ={{id: val.ph_id}}>BUY</Link> */}




                               
                            { val.status==0 ? <>
                        <h6 className="centerbtn">Pending</h6>
                        </>:<></>
                    }
                    
                        {val.status== 1 ?<>
                        <h6>Approve</h6>
                        </>:
                        <></>
                        }
                        {val.status== 2 ?<>
                        <h6>Reject</h6>
                        </>:<></>
                        }
                    
                       





							 </ul>
						 </div></td>
                         <td>
                         { val.status==0 ? <>
                        
                        </>:<></>
                    }
                    
                        {val.status== 1 ?<>
                            <button type="button" id="button" class="btnstyle"  onClick={(e)=>pay(val.oc_id)} >Pay</button>
    
                        </>:
                        <></>
                        }
                        {val.status== 2 ?<>
                        
                        </>:<></>
                        }
                     
                         </td>
                         
                         
                         
                          </tr> 
                                )
                                
                            })}


                    
                            {/* <ul>
                         {cartItems.map((item) => {
                            
                           
                          
                          return(  <li key={item.ph_id}>{item.ph_name} - ${item.ph_price}</li>
                            )
                        })} 
                          </ul> */}
                        <tr > <th></th> <th></th> <th>  </th><th> Total Price Rs: {count }</th>
                        <th>
                        </th>  <th> </th></tr>
                          
                          
                             </tbody> </table>

					</div>
                
    )
}export default Mybookings