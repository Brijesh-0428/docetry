import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Book() {
    let location = useLocation();
    var ph = location.state.id;
    const [list, Setlist] = useState(['']);
	const [cat, Setcat] = useState(['']);

    useEffect(() => {
        axios.get("http://localhost:1137/api/main_event", { params: { id: ph } }).then((Response) => {
            Setlist(Response.data);
        }, [ph]);
		axios.get("http://localhost:1137/api/managcat").then((Response)=>{
Setcat(Response.data);

		},[])
    },[]);

    function Placeorder(id) {
        const uid = id;
        let user = JSON.parse(sessionStorage.getItem("user_data"));
        let u_id = user ? user.id : null;


        var cusname = document.getElementById("cname").value;
        var eventType = document.getElementById("eventType").value;
        var eventDate = document.getElementById("eventDate").value;
        var eventTime = document.getElementById("eventTime").value;
        var cusaddr = document.getElementById("caddress").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var description = document.getElementById("description").value;
        axios.post("http://localhost:1137/api/placeorder", {
            id: u_id,
            ph:ph,
            cusname: cusname,
            eventType: eventType,
            eventDate: eventDate,
            eventTime: eventTime,
            cusaddr: cusaddr,
            contactNumber: contactNumber,
            description:description
        }).then((Response) => {
            alert("Order placed successfully");
            window.location = "/Book";
        });
    }

    return (
        <div>
            {list.map((val) => {
                return (
                    <div className="single-sec">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li className="active">Booking</li>
                            </ol>
                            <div className="col-md-12 det">
                                <div className="single_left">
                                    <div className="flexslider">
                                        <ul className="slides">
                                            <Link to="/Book" state={{ id: val.ph_id }}>
                                                <li data-thumb="images/s11.jpeg">
                                                    <img src={"http://localhost:1137/public/" + val.ph_img1} style={{ height: "400px" }} />
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-right">
                                    <h3>{val.ph_name}</h3>
                                    <div className="single-bottom1">
                                        <h6>Details</h6>
                                        <p className="prod-desc">{val.ph_desc}</p>
                                    </div>
                                    <div className="sofaset-info">
                                        <div id="page-wrapper">
                                            <div className="main-page">
                                                <div className="forms" style={{ marginRight: "40px", marginLeft: "10px" }}>
                                                    <div className="form-grids row widget-shadow" data-example-id="basic-forms">
                                                        <div className="form-title">
                                                            <h4>Fill The Event Registration Details</h4>
                                                        </div>
                                                        <div className="form-body">
                                                            <form>
                                                                <div className="form-group">
                                                                    <label htmlFor="cname">Customer Name</label>
                                                                    <input type="text" className="form-control" id="cname" placeholder="Customer Name" />

                                                                    <label htmlFor="eventType">Event Type</label>
                                                                    <select className="form-control" id="eventType" defaultValue="">
            <option value="" disabled>Select an event type</option>
            {cat.map((category, index) => (
                <option key={index} value={category.name}>
                    {category.name}
                </option>
            ))}
        </select>

                                                                    <label htmlFor="eventDate">Event Date</label>
                                                                    <input type="date" className="form-control" id="eventDate" />

                                                                    <label htmlFor="eventTime">Event Time</label>
                                                                    <input type="time" className="form-control" id="eventTime" />

                                                                    <label htmlFor="caddress">Customer Address</label>
                                                                    <input type="text" className="form-control" id="caddress" placeholder="Customer Address" />

                                                                    <label htmlFor="contactNumber">Contact Number</label>
                                                                    <input type="tel" className="form-control" id="contactNumber" placeholder="Contact Number" />
                                                                    <label htmlFor="contactNumber">Booking Description </label>
                                                                    <textarea className="form-control" id="description"></textarea>

                                                                </div>
                                                            </form>
                                                            <div className="cost" style={{ marginLeft: "-30px" }}>
                                                                <div className="prdt-cost">
                                                                    <ul>
                                                                        <li className="active" style={{ marginLeft: "15px" }}>Rs:{val.ph_price}</li>
                                                                        <button type="button" id="button" className="btnstyle" onClick={() => Placeorder(val.ph_id)}>Place Order</button>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Book;
