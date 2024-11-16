import React,{useEffect,useState} from "react";
import axios from "axios";
import { useLocation,Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
function Feedback()
{
    const [list,Setlist]=useState([])
    const[deletefeedback,setdelefeedback]=useState(null);
    const[isModalOpen,setIsModalOpen]=useState(false);

    const openModel=(id)=>{
        setdelefeedback(id)
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }

    function Delet(id){
        const delete_id=id;
        axios.post("http://localhost:1137/api/feedbackdelete",{delete_id:delete_id}).then((Response)=>{
            alert(Response.data.msg);
            window.location="";
        })
    }
    const [rs,Setlist1]=useState([]);
    const showDetail=(id)=>{
      const edit_id=id;
      axios.post("http://localhost:1137/api/detail_fatch",{edit_id:edit_id}).then((Response)=>{
        
        Setlist1(Response.data);
        console.log(Response.data)
      },[])
    }
    function save(id){
      const save_id=id;

      var fb = document.getElementById('feedback').value;
      axios.post("http://localhost:1137/api/savefb",{save_id,save_id,fb:fb}).then((Response)=>{
        alert(Response.data.msg);
      })
    }
    // function edit(id){
    //   const add_id=id;
    //   axios.post("http://localhost:1137/api/edit",{id:id}).then((Response)=>{
    //     alert(Response.data.msg);
    //     window.location="";
    //   })
    // }

    useEffect(()=>{
        axios.get("http://localhost:1137/api/feedbackadmin",).then((Response)=>{
            Setlist(Response.data)
        })
    },[])
    return(
        <div>
            <div id="page-wrapper">
			<div class="main-page">
				<div class="tables">
					<h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>Feedback Detail</h3>
					<div class="panel-body widget-shadow"
                    style={{marginRight:"5px",marginLeft:"300px"}} ></div>
        <div class="table-responsive bs-example widget-shadow" style={{marginRight:"5px",marginLeft:"300px"}}>
						<h4 style={{color:"green"}}>Feedback Detail:</h4>
						<table class="table table-bordered"> <thead> <tr> <th>Sr.No:</th> <th>Name</th> <th>Decription</th> <th>Feedback</th> <th>Email</th> <th>Action</th> </tr> </thead> <tbody>
                            
                            {list.map((val,index)=>{
                                return(
                                <tr> <th scope="row">{index+1}</th> <td>{val.fb_name}</td> <td>{val.fb_desc}</td> <td>{val.fb_feedback}</td> <td>{val.fb_email}</td> 
                                <td>
                                <button style={{width:"30px", marginRight:"10px"}}  data-target="#editmodal" data-toggle="modal" aria-hidden="true" onClick={()=>{showDetail(val.fb_id)}}>
                                <FaEye />
                             </button>
                             <button style={{width:"30px"}} data-target="#exampleModal" data-toggle="modal" onClick={()=>{openModel(val.fb_id)}}><RiDeleteBin5Fill />
                             </button>
                                    
                                    </td> </tr> 

                            )})}
                             
                              </tbody> </table> 
					</div>
                    </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h2>Are you sure want to delete?</h2>
     
      <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>Delet(deletefeedback)} data-dismiss="modal">Delete</button>
        <button type="button" data-dismiss="modal" aria-label="Close"  style={{height:"40px",width:"70px"}} class="btn btn-success" >Cancel</button>
      </div>
      
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
                     
                          <td>Name</td>
                          <td id="clientName">{val.fb_name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td id="clientEmail">{val.fb_email}</td>
                        </tr>
                        <tr>
                          <td>Descripition</td>
                          <td id="clientMobile">{val.fb_desc}</td>
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
}export default Feedback