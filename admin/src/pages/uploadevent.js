import React, { useEffect, useState } from "react";
import axios from "axios";
function Uploadevent()
{
    const[cat,catlist]=useState([]);
    const[addcat,drop]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1137/api/addeventcat",).then((Response)=>{
            catlist(Response.data);
        },[])
    })

    const[image,eventimg]=useState('');
    
    function upload(){
        var upname = document.getElementById("ename").value;
// alert(upname)
        var uprice = document.getElementById("eprice").value;
        // alert(uprice)
        var udec = document.getElementById("edecr").value;

        // alert(udec  )
    
        // alert(addcat)
let formdata = new FormData();
formdata.append("up_name",upname);
formdata.append("u_price",uprice);
formdata.append("u_dec",udec);
formdata.append("addcat",addcat);
formdata.append("image",image);



        axios.post("http://localhost:1137/api/upload",formdata,{headers:{"Content-Type":"multipart/form-data"}}).then((Response)=>{
            alert("Upload Event sucessfully")
        })
    }
    return(
        <div>
            <div class="cbp-spmenu-push">

<div id="page-wrapper">
    <div class="main-page">
        <div class="forms">
             <h3 class="title1">Upload Event</h3> 
            <div class="form-grids row widget-shadow" data-example-id="basic-forms" style={{marginRight:"5px",marginLeft:"16px"}} > 
                <div class="form-title">
                    <h4>Upload Event</h4>
                </div>
                <div class="form-body">
                    <form> <div class="form-group"> 
                    <div class="event">
                    



                    <label for="event"  >Choose a Event: </label>
                    <select  class="form-control" onChange={(e)=>{drop(e.target.value)}}>
                        {cat.map((val,index)=>{
                            return(
                                <>
                                <option key={index} value={val.cid}>{val.name}</option>
                                </>
                            )
                        })}

                    </select>
                   
                    </div>
                    
                    
                    
                    <label for="exampleInputEmail1">Event Name</label> <input type="text" class="form-control" id="ename" placeholder="Add Event Name"/>
                    
                     <label for="exampleInputEmail1">Event Price</label> <input type="text" class="form-control" id="eprice" placeholder="Add Event Price"/> 

                     <label for="exampleInputEmail1">Event decription</label> <input type="text" class="form-control" id="edecr" placeholder="Add Event decription"/> 

                     <label for="img">Select image:</label>
                     <input type="file" id="upho" name="img" onChange={(e)=>eventimg(e.target.files[0])} />
                     
                     </div> 
                  <button type="submit" class="btn btn-default" onClick={upload}>Upload</button> </form> 
                  
                </div>
            </div>
          
           
           
            
           
        </div>
    </div>
</div>

  </div>

        </div>
    )

}export default Uploadevent