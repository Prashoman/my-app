import React, { Component } from "react";
// const axios = require('axios').default;
import axios from "axios";

export default class Bolg extends Component{

    

    render(){
        
        return(
            <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="container mt-5">
                    <h2 className="mb-3">Register</h2>
                    <form onSubmit="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                       
                        </label>
                        <input className="form-control" type="text"  required placeholder ="Enter your number" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                        
                        </label>
                        <input className="form-control" type="text"  required placeholder ="Full Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                        
                        </label>
                        <input className="form-control" type="password" required placeholder ="Create  Password " />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                        
                        </label>
                        <input className="form-control" type="cpassword" required placeholder ="Confirm Password " />
                    </div>

                    <button className="btn btn-danger" type="submit">
                        Register
                    </button>
                    </form>
                        </div>
                </div>
                <div className="col-3"></div>
        </div>
        )
    }
}