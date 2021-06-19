import React, { Component } from 'react';

class AdminDashBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
       
           
        }
        
    }
    render() {
        return (
            <div>
              <h1>AdminDashBoard </h1><br />


            

              <h2>Hi {this.props.match.params.name}</h2>  

                  <nav>
                <nav-item>
                
                <a href="/add-university">Add University</a> <br />
                           <a href="#!">Add Course</a> <br />

                           <a href="#!">View Applicants</a><br />

                            <a href="#!">View Applications</a>  <br />
                            <a href="#!">View payments</a> <br />
                            <a href={`/admin/${this.props.match.params.name}/addCollege`}>add College</a><br />
                            <a href={`/admin/${this.props.match.params.name}/ListColleges`}>View Colleges</a>  <br />
                            <a href={`/admin/${this.props.match.params.name}/addProgram`}>add Program</a>
                    
                </nav-item>
                </nav>  
            </div>
        );
    }
}

export default AdminDashBoard;