import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation, useParams } from "react-router-dom"


function Event()
{
    
// let user = JSON.parse(sessionStorage.getItem("user_data"))
//  let id = user? user.id: null;
//  alert(id)
const {id}= useParams()

   const [list, Setlist]=useState([''])
   
   const [cat, SetCetegory]=useState([''])
 const location =useLocation()
  var event  = location.state?.cat_name;

    useEffect(()=>{

        if( id== null){
         
        axios.get("http://localhost:1137/api/fetch_event").then((Response)=>{
            Setlist(Response.data)
        })
    }
        else{

            axios.get("http://localhost:1137/api/marriage_event",{params:{event:id}}).then((Response)=>{
                Setlist(Response.data)
                SetCetegory(Response.data[1].name)
                console.log(Response.data[1].name)
            })

        }}

        
        
    ,[id, event])

    const capitalizeFirstLetter = (string) => {
        if (typeof string !== 'string') {
            console.warn('Expected a string but got:', string);
            return '';
        }
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    
    
    return(
        <div class="featured">
        <div class="container">
            <div class="row">
{cat== null ?
     <>
     <h3>All  Events</h3>
</>
:
<>

<h3>{capitalizeFirstLetter(cat)} Events</h3>
</>

}
            
            <div class="feature-grids">

{list.map((val)=>{
return(

    <>

{sessionStorage.getItem('user_data')== null ?
<>
<Link to = "/login" >
                <div class="col-md-3 feature-grid jewel">
                    <a href="product.html"><img  src={"http://localhost:1137/public/"+ val.ph_img1} alt=""/>	
                        <div class="arrival-info">
                            <h4>{val.ph_name}</h4>
                            <p>Rs {val.ph_price}</p>
                            {/* <span class="pric1"> {val.ph_desc} </span> */}
                            
                        </div>
                            {/* <div class="view">
                           <a href=""><spann class="glyphicon glyphicon-eye-open" aria-hidden="true"></spann>Quick View</a>
                        </div>  */}
                        {/* <div class="shrt">
                           <a href="product.html"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>Shortlist</a>
                        </div>  */}
                        </a>
                </div>
                </Link>

</>
:

<>
<Link to = "/quick" state ={{id: val.ph_id}}>
                <div class="col-md-3 feature-grid jewel">
                    <a href="product.html"><img  src={"http://localhost:1137/public/"+ val.ph_img1} alt=""/>	
                        <div class="arrival-info">
                            <h4>{val.ph_name}</h4>
                            <p>Rs {val.ph_price}</p>
                            {/* <span class="pric1"> {val.ph_desc} </span> */}
                            
                        </div>
                            {/* <div class="view">
                           <a href=""><spann class="glyphicon glyphicon-eye-open" aria-hidden="true"></spann>Quick View</a>
                        </div>  */}
                        {/* <div class="shrt">
                           <a href="product.html"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>Shortlist</a>
                        </div>  */}
                        </a>
                </div>
                </Link>

</>


}
    
   

               
                
                   
    </>
)

})}
                </div>
                </div>
                </div>
   </div>
    )
}export default Event