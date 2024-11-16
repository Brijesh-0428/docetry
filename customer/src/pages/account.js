import { useState } from "react";
import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
function Account() {
    const [gender, setGender] = useState('');

    function submitreg(e) {
        e.preventDefault();  // Prevent form from refreshing the page

        const firstname = document.getElementById('first').value;
        const lastname = document.getElementById('last').value;
        const email = document.getElementById('email').value;
        const phoneno = document.getElementById('phoneno').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;

        axios.post("http://localhost:1137/api/reg", {
            firstname1: firstname,
            lastname1: lastname,
            email1: email,
            phoneno1: phoneno,
            password1: password,
            address: address,
            gender: gender
        }).then((Response) => {
            if(Response.data.msg){
                iziToast.error({
                    title: 'Error',
                    message: 'User Alrady Registerd.',
                    position: 'topRight'
                });
               
           

            }else{
                iziToast.success({
                    title: 'Success',
                    message: 'Registration successful',
                    position: 'topRight'
                });
            }
            
        }).catch((error) => {
            iziToast.error({
                title: 'Error',
                message: 'Registration failed. Please try again.',
                position: 'topRight'
            });
            console.error('Registration error:', error);
        });
    }

    function signin(e) {
        e.preventDefault();  // Prevent form from refreshing the page

        const ema = document.getElementById('el').value;
        const pas = document.getElementById('pd').value;

        axios.post("http://localhost:1137/api/lg", { log1: ema, passw1: pas })
            .then((Response) => {
                if (Response.data.msg) {
                    iziToast.error({
                        title: 'Error',
                        message: Response.data.msg,
                        position: 'topRight'
                    });
                } else {
                    const obj = {
                        name: Response.data[0].reg_fname,
                        id: Response.data[0].reg_id,
                        email: Response.data[0].reg_email
                    };
                    sessionStorage.setItem("user_data", JSON.stringify(obj));
                    
                    iziToast.success({
                        title: 'Success',
                        message: 'Login successful',
                        position: 'topRight'
                    });

                    setTimeout(() => {
                        window.location = "/";
                    }, 1500); // Delay to show the success message
                }
            }).catch((error) => {
                iziToast.error({
                    title: 'Error',
                    message: 'Login failed. Please try again.',
                    position: 'topRight'
                });
                console.error('Login error:', error);
            });
    }
    return (
        <div>
            <div className="container">
                <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Account</li>
                </ol>
                <div className="registration">
                    <div className="registration_left">
                        <h2>New user? <span> Create an account </span></h2>
                        <div className="registration_form">
                            <form onSubmit={submitreg}>
                                <div>
                                    <label>
                                        <input placeholder="First name:" id="first" type="text" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Last name:" id="last" type="text" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Address:" id="address" type="text" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Mobile:" type="text" id="phoneno" required />
                                    </label>
                                </div>
                                <div className="sky_form1">
                                    <ul>
                                        <li>
                                            <label className="radio">
                                                <input type="radio" name="gender" onChange={() => setGender("male")} />
                                                <i></i>Male
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio">
                                                <input type="radio" name="gender" onChange={() => setGender("female")} />
                                                <i></i>Female
                                            </label>
                                        </li>
                                        <div className="clearfix"></div>
                                    </ul>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Email address:" id="email" type="email" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Password" type="password" id="password" required />
                                    </label>
                                </div>
                                <div>
                                    <button type="submit" id="register-submit">Create an account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="registration_left">
                        <h2>Existing user</h2>
                        <div className="registration_form">
                            <form onSubmit={signin}>
                                <div>
                                    <label>
                                        <input placeholder="Email:" id="el" type="email" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Password" id="pd" type="password" required />
                                    </label>
                                </div>
                                <div>
                                    <input type="submit" value="Sign in" id="register-submit" />
                                </div>
                                <div className="forget">
                                    <a href="#">Forgot your password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
}

export default Account;
