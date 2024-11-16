var mysql = require("mysql");
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var cors = require("cors");

var multer = require("multer");
const path = require("path");

var app = express();
app.use("/public",express.static("public"));
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
const { connected } = require("process");
const { request } = require("http");
const { log } = require("console");
app.listen(1137);

//mail
var nodemailer = require('nodemailer');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ggg"
})

// multer configurations
const storage = multer.diskStorage({
    destination:path.join(__dirname,'./public'),
    filename:function(req,file,callback){
        callback(null,Date.now()+ '-' + path.extname(file.originalname))
    }
})

////registation

app.post('/api/reg',(reqest,response)=>{
    console.log("dhjwdw");
var fname = reqest.body.firstname1
console.log(fname)

var lname = reqest.body.lastname1

console.log(lname)
var email = reqest.body.email1

console.log(email)
var phno = reqest.body.phoneno1
console.log(phno)

var pass = reqest.body.password1

console.log(pass)
var add = reqest.body.address
console.log(add)

var gender = reqest.body.gender
console.log(gender)
 const sel= "select * from c_reg where reg_email= ?"
 con.query(sel,[email],(err, result)=>{
    if (result.length > 0) {
console.log(result);
        response.send({msg:"User Already exists"})
    }
    else{
        console.log("hiii");
        const ins = "insert into c_reg (reg_fname,reg_lname,reg_phno,reg_address,reg_password,reg_gender,reg_email) values (?,?,?,?,?,?,?)"

        con.query(ins,[fname,lname,phno,add,pass,gender,email])
        
        response.send()
    }
 })
 
;
})
app.post('/api/fb',(reqest,response)=>{
    var yname = reqest.body.yourname1

var emaill = reqest.body.email1

var fb = reqest.body.Feedback1

var des = reqest.body.decription1
const ins1 = "insert into oc_fb (fb_name,fb_email,fb_desc,fb_feedback) values (?,?,?,?)"

con.query(ins1,[yname,emaill,des,fb])

response.send();
})



app.post('/api/lg',(request,response)=>{
    var logg = request.body.log1
      console.log(logg)
    var passww = request.body.passw1
// console.log(passww)

    // var logg = request.body.ema1
     
    // var passww = request.body.pas1

    const ins2 = "select * from c_reg where reg_email=? and reg_password=? ";

    con.query(ins2,[logg,passww],(err, result)=>{
        if(result.length > 0){
             console.log(result)
            response.send(result)
        }
        else{
            response.send({msg:"wrong id password"});
        }
    })  
    
})
app.post('/api/add',(request,response)=>{
     var carname = request.body.catnAME1
    //  console.log(carname)

     const ins3 = "insert into catad (name) values (?)"

     con.query(ins3,[carname])

     response.send();
})

app.post('/api/event',(request,response)=>
{
    var userid = request.body.fd

    var ffid = request.body.uid

    // const ins6 = "insert into add_cart (pro_id,user_id) values(?,?) "

    // con.query(ins6,[userid,ffid])

    const ins8 = "select * from add_cart where pro_id=? and user_id=?";

    con.query(ins8,[userid,ffid],(err,result)=>{
        if(result.length > 0)
        {
            response.send({msg:"you are already saved in your cart"});
            
        }
        else{
            const ins9 = "insert into add_cart (pro_id,user_id) values(?,?)"

            con.query(ins9,[userid,ffid])
            
            response.send();

        }

    })
   
 
})
app.post('/api/remove',(request,response)=>
{
   // console.log("I M here");
    var userid = request.body.cart_id;

    const ins9 = "delete from add_cart where cart_id=?";

  //  console.log(ins9);

    con.query(ins9,[userid])

    response.send({msg:"delete successfully"});
})



const uploads = multer({storage:storage});


var image = uploads.fields([{name:'image'}])
app.post('/api/upload',image,(request,response)=>{
    var uploadname = request.body.up_name
    
// console.log(uploadname)
    var uploadprice = request.body.u_price
    // console.log(uploadprice)

    var uploaddesc = request.body.u_dec

    var addcat = request.body.addcat
    // console.log(addcat)
    const img = request.files.image[0];
    var imgfn = img.filename;
    const ins5 = "insert into photo_mant (ph_name,ph_price,ph_desc,ph_img1,ph_category) values (?,?,?,?,?) "

    con.query(ins5,[uploadname,uploadprice,uploaddesc,imgfn,addcat])

    response.send();
})
app.get("/api/fetch_event",(request, response)=>{

const sel =" select * from photo_mant";

   con.query(sel,(err,result)=>{
   
    response.send(result);
   });
});


app.get("/api/main_event",(request, response)=>{
var id= request.query.id;
    const sel =" select * from photo_mant where ph_id=? ";
    
       con.query(sel,[id],(err,result)=>{
    
        response.send(result);
       });
    });


app.get("/api/addcart",(request,response)=>{
    var uid = request.query.id;
    // console.log(uid)

    const ins7 = "select a.* , b.* from photo_mant as b, add_cart as a where a.pro_id=b.ph_id  and a.user_id=? ";

    con.query(ins7,[uid],(err,result)=>{
        response.send(result);
    })
})

app.get("/api/viewbookings",(request,response)=>{
    var uid = request.query.id;
    // console.log(uid)

    const ins7 = "select a.* , b.* from photo_mant as b, oc_order as a where a.ph_id=b.ph_id  and a.user_id=? ";

    con.query(ins7,[uid],(err,result)=>{
        response.send(result);
    })
})



app.get("/api/order",(request,response)=>{
    //var uid = request.query.id;
   // console.log("my id is"+uid);

    const ins11 = "select a.* , b.* from photo_mant as a, oc_order as b where a.ph_id=b.ph_id"

    con.query(ins11,(err,result)=>{
         console.log(result);
        response.send(result);
    })
})

app.post("/api/placeorder",(request,response)=>{
    console.log("api calls");
    var cuid = request.body.id;
    var ph_id = request.body.ph;
    var cuname = request.body.cusname;

    var eventtype = request.body.eventType;
    var eventdate = request.body.eventDate;
    var eventtime = request.body.eventTime;
    var contactnumber = request.body.contactNumber;
    var cuaddr = request.body.cusaddr;
    var description = request.body.description;
    console.log(request.body)
    const ins10 = "insert into oc_order(user_id,ph_id,oc_name,eventtype,eventdate,eventtime,contactnumber,oc_address,description) values(?,?,?,?,?,?,?,?,?)"
console.log("h");
    con.query(ins10,[cuid,ph_id,cuname,eventtype,eventdate,eventtime,contactnumber,cuaddr,description],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            response.send(result);

        }

    })
})

app.get("/api/managcat",(request,response)=>{
    const ins12 = "select * from catad"

    con.query(ins12,(err,result)=>{
        response.send(result);
    })
})
app.get("/api/useradmin",(request,response)=>{
    const ins13 = "select * from c_reg"

    con.query(ins13,(err,result)=>{
        response.send(result);
    })
})
app.get("/api/feedbackadmin",(request,response)=>{
    const ins14 = "select * from oc_fb"

    con.query(ins14,(err,result)=>{
        response.send(result);
    })
})
app.get("/api/manageadmin",(request,response)=>{
    const ins15 = "select * from photo_mant"

    con.query(ins15,(err,result)=>{
        response.send(result);
    })
})
app.get("/api/addeventcat",(request,response)=>{
    const ins16 = "select * from catad"

    con.query(ins16,(err,result)=>{
        response.send(result);
    })
})
app.post("/api/deletecateadmin",(request,response)=>{
    const ins17 = "select * from photo_mant"

    con.query(ins17,(err,result)=>{
        response.send(result);
    })
})

app.post('/api/deletevent',(request,response)=>{
    var del = request.body.delete_id;

    const ins18 = "delete from photo_mant where ph_id=?";

    con.query(ins18,[del])

    response.send({msg:"delete successfully"})
})

app.post('/api/deletecatevent',(request,response)=>{
    var del= request.body.del_id;

    const ins19 = "delete from catad where cid=?";

    con.query(ins19,[del])

    response.send({msg:"delete successfully"})
})
app.post('/api/deleteuservalue',(request,response)=>{
    var del=request.body.delete_id;

    const ins20= "delete from c_reg where reg_id=?"

    con.query(ins20,[del])

    response.send({msg:"delete successfully"})
})

app.post('/api/feedbackdelete',(request,response)=>{
    var del=request.body.delete_id;

    const ins21= "delete from oc_fb where fb_id=?"

    con.query(ins21,[del])

    response.send({msg:"delete successfully"})

})
app.post('/api/savefb',(request,response)=>{
    var del=request.body.save_id;

    var feedback = request.body.fb;

    const ins22="update  oc_fb set fb_name=?,fb_email =? ,fb_desc=? ,fb_feedback=? where fb_id=? "

    con.query(ins22,[del,feedback])

    response.send({msg:"Modification successfully"})
})

app.post('/api/order_confirm',(request,response)=>{
    var save_id=request.body.save_id;

    var valsb = request.body.valsb;

    const ins22="update  oc_order set status=? where oc_id=? "

    con.query(ins22,[save_id,valsb])

    response.send({msg:"Modification successfully"})
})



app.post('/api/detail_fatch',(request,response)=>{
var edit = request.body.edit_id;
// console.log(edit)
const ins23= "select * from oc_fb where fb_id=?"

con.query(ins23,[edit],(err,result)=>{
    console.log(result)
    response.send(result);
})

})

app.post('/api/order_det_fatch',(request,response)=>{
    var oc_id = request.body.oc_id;
    // console.log(edit)
    const ins23= "select a.*,b.* from  oc_order as a , photo_mant as b where a.ph_id= b.ph_id and a.oc_id=?"
    
    con.query(ins23,[oc_id],(err,result)=>{
        console.log(result)
        response.send(result);
    })
    
    })

app.post('/api/userdetail',(request,response)=>{
    var user = request.body.user_id;

    const ins25= "select * from c_reg where reg_id=?"

    con.query(ins25,[user],(err,result)=>{
        console.log(result)
        response.send(result);
    })

    

})
app.post('/api/eventaction',(request,response)=>{
    var event = request.body.eventmanage_id;

    const ins26="select * from photo_mant where ph_id=?"
    con.query(ins26,[event],(err,result)=>{
        response.send(result);
        console.log(result)
    })
})


app.post('/api/updatevent',(request,response)=>{
    
    let upload = multer({storage:storage}).single('image');
    upload(request,response,function(err){
        if(!request.file){
            console.log("file not found")
        }
        else{
            
        
    var pname = request.body.pname;
    // console.log(pname)
    var price = request.body.price;
console.log(price)
    var desc = request.body.desc;
    console.log(desc)
    var id = request.body.event_id;
    console.log(id)
    var image = request.file.filename;
    console.log(image)
    

    const ins27="update photo_mant set ph_name=?,ph_price=?,ph_desc=?,ph_img1=? where ph_id=?"

    con.query(ins27,[pname,price,desc,image,id],(err,result)=>{
        if(result){
            response.send(result)
        }else{
            response.send({msg:"Modification successfully"})    
        }
        
        
    })
}
})
    
})
app.post('/api/categorymodifi',(request,response)=>{
    var id = request.body.category_id;
// console.log(id)
    const ins28= "select * from catad where cid=?"

    con.query(ins28,[id],(err,result)=>{
        response.send(result);
    })
})

app.post('/api/managecatadmin',(request,response)=>{
    var catname = request.body.name;
// console.log(catname)
    var id = request.body.cat_id;

    const ins29="update catad set name=? where cid=?"

    con.query(ins29,[catname,id],(err,result)=>{
        if(result){
            // console.log(result)
            response.send(result)
        }else{
            response.send({msg:"Modification successfully"})    
        }
    })
})

app.get("/api/fetch_marriage",(request, response)=>{

    const sel =" select * from c_marriage";
    
       con.query(sel,(err,result)=>{
       
        response.send(result);
       });
    });

app.get("/api/marriage_event",(request,response)=>{
    var event = request.query.event;
    console.log(event)

    const ins30 = "select a.* , b.* from photo_mant as b, catad as a where b.ph_category=a.cid  and b.ph_category=? ";

    con.query(ins30,[event],(err,result)=>{
        console.log(result)
        response.send(result);
    })
})
app.post("/api/sendemail",(request,response)=>{
    var email = request.body.email;

    const ins31 = "select * from c_reg where reg_email=?";

    con.query(ins31,[email],(err,result)=>{
        if(result.length > 0)
        {
            response.send(result)
            let password= result[0].reg_password
            console.log(password)
            let name= result[0].reg_fname
            console.log(name)
            var transporter = nodemailer.createTransport({
                host:'smtp.gmail.com',
                port:587,
                secure:false,
                auth:
                {
                    user:"growsmartmsu@gmail.com",
                    pass: "rjydfxwgcazqdzyn",
                },
            });
            var mailOptions = {
                from:"rishi46465773@gmail.com",
                to:email,
                subject:"Forgot Password",
                text:"hello" +name+"yreour password is" +password+"."
            
            };
            transporter.sendMail(mailOptions,function(err,info){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    response.send(result)
                    console.log("Email sent:"+info.response);
                }
            })
        }
        else
        {
           response.send({msg:"please Enter a valid Email"})
        }
        
    })
})
app.post('/api/report',(request,response)=>{
    var from = request.body.from
   console.log(from)
    var To = request.body.to
    console.log(To)
    
    const ins32 ="select * from oc_order where oc_time  BETWEEN ? AND ?";
    // select * from oc_order where oc_time BETWEEN "2024-02-01" AND "2024-03-12"
    con.query(ins32,[from,To],(err,result)=>{
        console.log(result)
        response.send(result)
      
    })
})
con.connect(function (err){
    if(err) throw err;
    console.log("connected");
});
