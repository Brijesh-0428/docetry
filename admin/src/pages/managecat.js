import React,{useEffect,useState} from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
function Managecat()
{
    const [list,Setlist]=useState([])
    const[deletecate,setdeletecate]=useState(null);
    const[editcat,setedit]=useState(null);
    const[isModalOpen,setIsModalOpen]=useState(false);



    const openModel=(id)=>{
      
        setdeletecate(id)
       
    }
    const closeModal=()=>{ 
      window.location.reload();
    }

    function Del(id){
      setdeletecate(id)
      
        const del_id=id;
        axios.post("http://localhost:1137/api/deletecatevent",{del_id:del_id}).then((Response)=>{
            alert(Response.data.msg);
            window.location="/";
        })
    }

    const [rs,Setlist1]=useState([]);
    const showDetail=(id)=>{
      setedit(id);
      
      axios.post("http://localhost:1137/api/categorymodifi",{category_id:id}).then((Response)=>{
        Setlist1(Response.data);
      
      },[])
    }
    
    useEffect(()=>{
        axios.get("http://localhost:1137/api/managcat",).then((Response)=>{
            Setlist(Response.data)
        })
    },[])

    function save(id){
      const cat_id=id;
      var name = document.getElementById('catname').value;

      axios.post("http://localhost:1137/api/managecatadmin",{cat_id:cat_id,name:name}).then((Response)=>{
        if(Response.data){
          window.location.reload()
          alert("Update Successfully")
        }
        else{
          alert(Response.data.msg)
        }
      })
    }
    return(
      <>
        <div id="page-wrapper">
			<div class="main-page">
				<div class="tables">
					<h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>Manage Category </h3>
					<div class="panel-body widget-shadow"
                    style={{marginRight:"70px",marginLeft:"350px"}} ></div>
        <div class="table-responsive bs-example widget-shadow" style={{marginRight:"70px",marginLeft:"350px"}}>
						<h4 style={{color:"green"}}> Manage Category:</h4>
						<table class="table table-bordered"> <thead> <tr> <th>Sr.No.</th> <th>Name</th> <th>Date</th>  <th style={{width:"100px"}}>Action </th> </tr> </thead> <tbody> 
                            
                            {list.map((val,index)=>{
                                return(
                            
                            <tr> <th scope="row">{index+1}</th> <td>{val.name}</td> <td>{new Date (val.date).toLocaleString('en-GB')}</td> 
                            
                            <td><button  data-target="#editmodal" data-toggle="modal" aria-hidden="true" onClick={()=>{showDetail(val.cid)}} style={{width:"30px",height:"30px", marginRight:"10px"}}><FaPencilAlt />
                             </button>
                            
                            <button style={{width:"30px",height:"30px"}} data-target="#exampleModal" data-toggle="modal" onClick={()=>{openModel(val.cid)}}  ><RiDeleteBin5Fill />
                             </button>
                            
                            </td>
                             </tr> 
                            
                       ) })}
                            </tbody> </table> 


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
                                            <td><input type="text" id="catname" defaultValue={val.name}></input></td>
                                          </tr>
                                          <tr>
                                            <td>Date</td>
                                            <td id="Date">{val.date}</td>
                                          </tr>
                                          
                                          <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>save(val.cid)} data-dismiss="modal">save</button>
                          <button type="button" data-dismiss="modal" aria-label="Close" onClick={closeModal} style={{height:"40px",width:"70px"}} class="btn btn-success" >Cancel</button>
                  
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
     
      <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>Del(deletecate)} data-dismiss="modal">Yes</button>
        <button type="button"  style={{height:"40px",width:"70px"}} class="btn btn-success" onClick={closeModal} >Cancel</button>
      </div>
      
    </div>
  </div>
</div>
                    </div>
                  
                    </>
    )
}export default Managecat