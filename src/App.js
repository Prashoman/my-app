import React, { Component } from "react";
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  render(){
    return(
      <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container mt-5">
                        <h2 className="mb-3">Login or Register</h2>
                        <form onSubmit="">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                            Enter your mobile number
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>

                        <button className="btn btn-danger" type="submit">
                            <Link to="/register"> Submit </Link>                          
                        </button>
                        </form>
                            </div>
                    </div>
                    <div className="col-3"></div>
            </div>
    )
  }

}
export default App;
