import React,{useEffect,useState} from "react";
import axios from "axios";
import { useLocation,Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
function Managevent(){
    
    const [list,Setlist]=useState([])
    const[modelid,setmodelid] =useState(null);
    const[isModalOpen,setIsModalOpen] = useState(false);
  function Deletee(id){
    const delete_id=id;
    axios.post("http://localhost:1137/api/deletevent",{delete_id:delete_id}).then((Response)=>{
      alert(Response.data.msg);
      window.location="";
    })
  }
  const openModel=(id)=>{
    // alert(id)
    setmodelid(id)
    setIsModalOpen(true);
}
    const closeModal = () => {
        setIsModalOpen(false);
      };
    
    useEffect(()=>{
        axios.get("http://localhost:1137/api/manageadmin",).then((Response)=>{
            Setlist(Response.data)
        })
    },[]);

    // modal open for editing.... 
const [rs,Setlist1]=useState([]);
const showDetail=(id)=>{
  const eventmanage_id=id;
  axios.post("http://localhost:1137/api/eventaction",{eventmanage_id:eventmanage_id}).then((Response)=>{
    Setlist1(Response.data);
    console.log(Response.data) 
  
  },[])
}
const [image,photochange]=useState('');
function save(id){
const event_id=id;
alert(event_id);
var pname = document.getElementById('phname').value;

var price = document.getElementById('phprice').value;

var desc = document.getElementById('photodesc').value;

let formdata = new FormData();

formdata.append("image",image);
formdata.append("pname",pname);
formdata.append("price",price);
formdata.append("desc",desc);
formdata.append("event_id",event_id)


axios.post("http://localhost:1137/api/updatevent",formdata,{headers:{"Content-Type":"multipart/form-data"}}).then((Response)=>{

if(Response.data){
  window.location.reload()
  alert("Updated sucessfully")

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
					<h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>Manage Event </h3>
					<div class="panel-body widget-shadow"
                    style={{marginRight:"5px",marginLeft:"300px"}} ></div>
        <div class="table-responsive bs-example widget-shadow" style={{marginRight:"5px",marginLeft:"300px"}}>
						<h4 style={{color:"green"}}>Manage Event:</h4>
						<table class="table table-bordered"> <thead> <tr> <th>Sr.No.</th> <th>Event Photo</th> <th>Event Name</th> <th >Event Decription</th> <th>Event Price</th> <th style={{width:"100px"}}>Action</th></tr> </thead> <tbody>
                            
                            {list.map((val,index)=>{
                                return(
                             <tr> <th scope="row">{index+1}</th> <td><img src={"http://localhost:1137/public/"+val.ph_img1} style={{height:"100px"}}/></td> <td>{val.ph_name}</td> <td>{val.ph_desc}</td> <td>{val.ph_price}</td> <td style={{width:"100px"}}>
                                <button  data-target="#editmodal" data-toggle="modal" aria-hidden="true" onClick={()=>{showDetail(val.ph_id)}} style={{width:"30px", marginRight:"10px"}}><FaPencilAlt />
                             </button>
                             
                             {/* <Button style={{width:"30px"}}   onClick={(e)=> openModel(val.ph_id)}>  <i ></i> </Button> */}

                             {/* <button  variant="info" size="lg" value={val.receiver_id} onClick={()=>{openModel(val.ph_id)}}>
          View Video
        </button> */}
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"onClick={()=>{openModel(val.ph_id)}}>
        delete
</button> */}

<button style={{width:"30px"}} data-target="#exampleModal" data-toggle="modal" onClick={()=>{openModel(val.ph_id)}}><RiDeleteBin5Fill />
                             </button>
                             </td> </tr>  
                             
                            )})}
                              </tbody> </table> 
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
     
      <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>Deletee(modelid)} data-dismiss="modal">Yes</button>
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
                     
                          <td>Photo Name</td>
                          <td><input type="text" id="phname" defaultValue={val.ph_name} style={{width:"350px"}}></input></td>
                        </tr>
                        <tr>
                          <td>Photo Price</td>
                          <td><input type="text" id="phprice" defaultValue={val.ph_price}></input></td>
                        </tr>
                        <tr>
                          <td>Photo Descripition</td>
                          <td><textarea type="text" id="photodesc" defaultValue={val.ph_desc} style={{height:"80px",width:"350px"}}/></td>
                        </tr>
                        <tr>
                          <td>Photo Img</td>
                          <td id="Img"><img src={"http://localhost:1137/public/"+val.ph_img1} style={{height:"100px"}}/>
                             {/* <input type="text" id="feedback" defaultValue={val.fb_feedback}></input> 
                       */}
                            <input type="file" id="imgage" name="img" onChange={(e)=>photochange(e.target.files[0])}></input>
                            </td>
                        </tr>
                        <button type="button" style={{marginRight:"10px",height:"40px",width:"55px"}} class="btn btn-danger" onClick={(e)=>save(val.ph_id)} data-dismiss="modal">save</button>
        <button type="button" data-dismiss="modal" aria-label="Close"  style={{height:"40px",width:"70px"}} class="btn btn-success" >Cancel</button>

                        </tbody>
                         </>
)
})} 
                      </table>
      </div>
      
    </div>
  </div>
</div>  </>
    )

}export default Managevent