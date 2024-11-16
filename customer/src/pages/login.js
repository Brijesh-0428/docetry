import React from "react";
import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function Login() {
    function submitlg(e) {
        e.preventDefault(); // Prevent form from reloading the page

        var log = document.getElementById('text').value;
        var passw = document.getElementById('pass').value;

        axios.post("http://localhost:1137/api/lg", { log1: log, passw1: passw })
            .then((Response) => {
                if (Response.data.msg) {
                    iziToast.error({
                        title: 'Error',
                        message: Response.data.msg,
                        position: 'topRight',
                    });
                } else {
                    let obj = { name: Response.data[0].reg_fname, id: Response.data[0].reg_id, email: Response.data[0].reg_email };
                    sessionStorage.setItem("user_data", JSON.stringify(obj));
                    
                    iziToast.success({
                        title: 'Success',
                        message: 'Logged in successfully!',
                        position: 'topRight',
                    });

                    setTimeout(() => {
                        window.location = "/";
                    }, 1500); // Redirect with a delay to show the success notification
                }
            })
            .catch((error) => {
                iziToast.error({
                    title: 'Error',
                    message: 'An error occurred during login. Please try again.',
                    position: 'topRight',
                });
                console.error('Login error:', error);
            });
    }

    return (
        <div>
            <div className="login_sec">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Login</li>
                    </ol>
                    <h2>Login</h2>
                    <div className="col-md-6 log">
                        <form onSubmit={(e) => submitlg(e)}>
                            <h5>Email:</h5>
                            <input type="text" id="text" />
                            <h5>Password:</h5>
                            <input type="password" id="pass" />
                            <input type="submit" value="Login" />
                            <a className="acount-btn" href="account.html">Create an Account</a>
                        </form>
                        <a href="/forgot">Forgot Password?</a>
                    </div>
                    <div className="col-md-6 log">
                        <img src="assets/images/login1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
