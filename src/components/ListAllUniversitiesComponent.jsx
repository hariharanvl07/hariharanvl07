import React, { Component } from 'react'
import UniversityService from '../Services/UniversityService'


class ListAllUniversitiesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                universities: [],
                colleges:[]
        }
     this.know=this.know.bind(this)
    }

  

    componentDidMount(){
        UniversityService.getUniversities().then((res) => {
            this.setState({ universities: res.data});
            console.log(res);
        });
       
    }

  know(id){

    console.log(id);
  }

    render() {
        return (
        
        <div >
           
               <h1>Online Admission System</h1>
               <div >

               
                        <table border="1" >
                        <tr>

            <th>S.no</th>
            <th>University</th>
            <th>College Name</th>
          

                        </tr>
                            
                         {
                                    this.state.universities.map(
                                        employee => 
                                        
                                        <tr key = {employee.universityId}>
                                          <td>{employee.universityId} </td>  
                                             <td>{employee.name}</td>
                                            
                                            <td>{employee.collegeList.map(
                                                college=>
                                                
                                                <tr key={college.collegeRegId}>
                                                <td> { college.collegeName}</td>

                                                <td>
                                                 <button onClick={ () => this.editEmployee(college.collegeRegId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(college.collegeRegId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(college.collegeRegId)} className="btn btn-info">View </button>
                                             </td>
    
                                               </tr>
                                               
                                               
                                               
                                               
                                               )}</td>
                                            
                                            
                                             
                                             
                                            
                                             
                                        </tr>
                                    )
                                }

                           
                            
                        </table>
                        </div>
                
                        </div>
            
        )
    }
}

export default ListAllUniversitiesComponent
