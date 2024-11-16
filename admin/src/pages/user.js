import React,{useEffect,useState} from "react";
import axios from "axios";
import { useLocation,Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
function User()
{
    const [list,Setlist]=useState([])
    const[usermodelid,setusermodelid]=useState(null);
    const[isModalOpen,setIsModalOpen]=useState(false);

    const openModel=(id)=>{
        setusermodelid(id)
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }
    const [rs,Setlist1]=useState([]);
    const showDetail=(id)=>{
      const user_id=id;
      axios.post("http://localhost:1137/api/userdetail",{user_id:user_id}).then((Response)=>{
        
        Setlist1(Response.data);
        console.log(Response.data)
        
      },[])
    }
    function save(){

    }

    function Dele(id){
        const delete_id=id;
        axios.post("http://localhost:1137/api/deleteuservalue",{delete_id:delete_id}).then((Response)=>{
            alert(Response.data.msg);
            window.location="";
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:1137/api/useradmin",).then((Response)=>{
            Setlist(Response.data)
        })
    })
    return(
        <div id="page-wrapper">
        <div class="main-page">
            <div class="tables"></div>
            <h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>User Detail</h3>
        <div class="table-responsive bs-example widget-shadow" style={{marginRight:"5px",marginLeft:"300px"}} >
						<h4 style={{color:"green"}}>User Detail:</h4>
						<table class="table table-bordered" style={{marginRight:"2px",marginLeft:"2px"}}> <thead> <tr> <th>Sr.No:</th> <th>First Name</th> <th>Last Name</th> <th>Phone No.</th> <th>Address</th> <th>Password</th> <th>Email</th> <th>Action</th></tr> </thead> <tbody> 
                            
                            {list.map((val,index)=>{
                                return(
                                <tr> <th scope="row">{index+1}</th> <td>{val.reg_fname}</td> <td>{val.reg_lname}</td> <td>{val.reg_phno}</td> <td>{val.reg_address}</td> <td>{val.reg_password}</td> <td>{val.reg_email}</td> <td>
                                    
                                    <button style={{width:"30px", marginRight:"10px"}}data-target="#editmodal" data-toggle="modal" aria-hidden="true" onClick={()=>{showDetail(val.reg_id)}}><FaEye />

                             </button>
                                    
                             <button style={{width:"30px"}} data-target="#exampleModal" data-toggle="modal" onClick={()=>{openModel(val.reg_id)}}><RiDeleteBin5Fill /></button>
                                    
                                    </td> </tr>

                            )})}
                              </tbody> </table> 
					</div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h2>Are you sure want to delete?</h2>
     
      <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>Dele(usermodelid)} data-dismiss="modal">Yes</button>
        <button type="button"  style={{height:"40px",width:"70px"}} class="btn btn-success" >Cancel</button>
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
                     
                          <td>First Name</td>
                          <td id="First Name">{val.reg_fname}</td>
                        </tr>
                        <tr>
                          <td>Last Name</td>
                          <td id="Last Name">{val.reg_lname}</td>
                        </tr>
                        <tr>
                          <td>Ph.No</td>
                          <td id="Ph.No">{val.reg_phno}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td id="Address">{val.reg_address}</td>
                        </tr>
                        <tr>
                          <td>Password</td>
                          <td id="Password">{val.reg_password	}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td id="Email">{val.reg_email}</td>
                        </tr>


                        <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>save(val.reg_id)} data-dismiss="modal">save</button>
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
}export default User