import React, { Component } from 'react';

class StudentDashBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
         name:this.props.match.params.name
       
           
        }
        
    }
    render() {
        return (
            <div>
              <h1>StudentDashBoard</h1> 
              <h2>Hi {this.state.name}</h2>  
            <nav>
                <nav-item>
                
                <a href="#!">Apply Online</a> <br />
                           <a href="#!">Application status</a> <br />

                           <a href="#!">Payments</a><br />

                            <a href="#!">Course</a>  <br />
                    
                    
                </nav-item>
                </nav>  
            </div>
        );
    }
}

export default StudentDashBoard;