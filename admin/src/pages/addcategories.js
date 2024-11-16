import React,{useEffect,useState} from "react";
import axios from "axios";
function Addcategories() {
    
    function add(){
        
        var catnAME= document.getElementById("cat").value;

        axios.post("http://localhost:1137/api/add",{catnAME1:catnAME}).then((Response)=>{
            alert("category added sucessfully")
        })
    }
    return (
<div class="cbp-spmenu-push">

<div id="page-wrapper">
    <div class="main-page">
        <div class="forms">
            <h3 class="title1">Cetegory</h3>
            <div class="form-grids row widget-shadow" data-example-id="basic-forms" style={{marginRight:"5px",marginLeft:"16px"}} > 
                <div class="form-title">
                    <h4>Add Cetegory :</h4>
                </div>
                <div class="form-body">
                    <form> <div class="form-group"> 
                    <label for="exampleInputEmail1"> Cetegory Name</label> <input type="text" class="form-control" id="cat" placeholder="Add Cetegory Name"/> </div> 
                  <button type="submit" class="btn btn-default" onClick={add}>Add</button> </form> 
                </div>
            </div>
          
           
           
            
           
        </div>
    </div>
</div>

  </div>
              
                )
}export default Addcategories