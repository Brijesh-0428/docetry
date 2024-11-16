import React, { useState } from "react";
import axios from "axios";
function Report(){
    const[list,Setlist]=useState([])
    function Show(){
  
        var from = document.getElementById('From').value;

        var to = document.getElementById('To').value;
        axios.post("http://localhost:1137/api/report",{from:from,to:to}).then((Response)=>{
            Setlist(Response.data)
        
        })
    }
    return(
        <div id="page-wrapper">
        <div class="main-page">
            <div class="tables">
                <h3 class="title1" style={{marginRight:"5px",marginLeft:"300px"}}>Report</h3>
                <div class="panel-body widget-shadow"
                style={{marginRight:"70px",marginLeft:"350px"}} ></div>
    <div class="table-responsive bs-example widget-shadow" style={{marginRight:"70px",marginLeft:"350px"}}>
                    <h4 style={{color:"green"}}>Report</h4>
                    <table class="table table-bordered"> <thead> <tr> <th>#</th> <th>From</th> <th>To</th>  <th>button</th> <th>Detail</th></tr> </thead> <tbody>
                        
                         <tr> <th scope="row">1</th> <td><input type="date" id="From" ></input></td> <td><input type="date" id="To" ></input></td> <td><button id="button" onClick={Show}>Show</button></td> </tr> <tr>   </tr>
                         {list.map((val)=>{ 
                        
                        
                        return (
                        
                    <tr> <th scope="row">{val.user_id}</th> <td>{val.oc_name}</td> <td>{val.oc_address}</td> <td>{val.oc_unit}</td> <td>{new Date (val.oc_time).toLocaleString('en-GB')}
                        </td> 
                        <td>
                            
                        
                        
                     </td>
                    </tr> 
                    
                    
                    
                    ) })}
                    
                     </tbody> </table> 
                </div>
                </div>
                </div>
                </div>


    )
}export default Report