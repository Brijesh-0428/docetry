import axios from "axios";
import React,{useEffect,useState} from "react";
import { useLocation,Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
function Orders()
{
   // let user = JSON.parse(sessionStorage.getItem("user_data"))
 //let useid = user? user.id: null;
 ///alert(useid);
    const [list, Setlist]=useState([])
    const [rs,Setlist1]=useState([]);
    const showDetail=(id)=>{
        const oc_id=id;
        alert(oc_id);
        axios.post("http://localhost:1137/api/order_det_fatch",{oc_id:oc_id}).then((Response)=>{
          
          Setlist1(Response.data);
          console.log(Response.data)
        },[])
      }
    
    useEffect(()=>{
        axios.get("http://localhost:1137/api/order",).then((Response)=>{
            Setlist(Response.data)
        })
    },[])
    function save(id, vals) {
        const save_id = id;
        const valsb = vals;
    
        axios.post("http://localhost:1137/api/order_confirm", { save_id, save_id,valsb:valsb }).then((response) => {
            alert(response.data.msg);
        });
    }
    return(
        <div>
        <div id="page-wrapper">
        <div class="main-page">
            <div class="tables">
                <h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>Order Detail</h3>
                <div class="panel-body widget-shadow"
                style={{marginRight:"5px",marginLeft:"300px"}} ></div>
    <div class="table-responsive bs-example widget-shadow" style={{marginRight:"5px",marginLeft:"300px"}}>
                    <h4 style={{color:"green"}}>Order Detail</h4>
                    <table class="table table-bordered"> <thead> <tr> <th>Sr No</th> <th>Customer Name</th> <th>Customer Address</th> <th>Order Time</th> <th>View</th> <th>Accept Or Reject</th> <th>Status</th>   </tr> </thead> 
                    <tbody> 
                    {list.map((val,count)=>{ 
                        
                        
                        return (
                        
                    <tr> <th scope="row">{count= count+1}</th> <td>{val.oc_name}</td> <td>{val.oc_address}</td>  <td>{new Date (val.oc_time).toLocaleString('en-GB')}
                        </td> 
                        <td>
                        <button style={{width:"30px", marginRight:"10px"}}  data-target="#editmodal" data-toggle="modal" aria-hidden="true" onClick={()=>{showDetail(val.oc_id)}}>
                                <FaEye />
                             </button>
                        </td>
                        <td>
                        { val.status==0 ? <>
                        <td>
                            <button type="button" id="button" onClick={()=>save(val.oc_id,1)} class="btn btn-default">Accept</button>
                            </td>
                            <td>
                      <button type="button" id="button" onClick={()=>save(val.oc_id,2)} class="btn btn-default">Reject</button>
                      </td>
                  
                        </>:<></>
                    }
                     </td>
                        <td>
                            { val.status==0 ? <>
                        <h6>Pending</h6>
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
                    
                        </td>
                       
                    </tr> 
                    
                    
                   
                   ) })} </tbody> </table> 
                </div>
                </div>
                </div>
                </div>
                <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="view" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="view">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <table class="table">
             {rs.map((val)=>{
return(
  <> 

                      <tbody>
                        <tr>
                          <td>Customer Name:</td>
                          <td id="clientName">{val.oc_name}</td>
                        </tr>
                        <tr>
                     <td>Customer Name:</td>
                     <td id="clientName">{val.oc_name}</td>
                   </tr>
                        <tr>
                          <td>Event Name:</td>
                          <td id="clientEmail">{val.ph_name}</td>
                        </tr>
                        <tr>
                          <td>Event Date:</td>
                          <td id="clientEmail">{val.ph_name}</td>
                        </tr>
                        <tr>
                          <td>Event Description:</td>
                          <td id="clientEmail">{val.description}</td>
                        </tr>
                        <tr>
                          <td>Event Price: Rs.</td>
                          <td id="clientMobile">{val.ph_price}</td>
                        </tr>
                        <tr>
                          <td>Feedback</td>
                          <td id="clientamt">{val.fb_feedback}
                            
                            </td>
                        </tr>
                        <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>save(val.fb_id)} data-dismiss="modal">save</button>
        <button type="button" data-dismiss="modal" aria-label="Close"  style={{height:"40px",width:"70px"}} class="btn btn-success" >Cancel</button>

                        </tbody>
                         </>
)
})} 
                      </table>
      </div>
      
    </div>
  </div>
</div>     
    </div>
    )

}export default Orders