import React, { Component } from 'react'
import CollegeService from '../../Services/CollegeService';
import UniversityService from '../../Services/UniversityService'

class ListCollegesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                colleges: [],
                universities:[],
                name:this.props.match.params.name
        }
      
        this.editCollege = this.editCollege.bind(this);
        this.deleteCollege = this.deleteCollege.bind(this);
        this.cancel=this.cancel.bind(this);
    }

    deleteCollege(id){
    CollegeService.deleteCollegeById(id).then( res => {
            this.setState({colleges: this.state.universities.map(unviversity=>unviversity.collegeList.filter(collegs => collegs.collegeRegId !== id))})
        this.props.history.push(`/admin/${this.props.match.params.name}/ListColleges`);
    window.location.reload()   
    });
       
       
        console.log(this.state.universities)
        //this.setState({universities: this.state.universities.map(university=>university.collegeList).filter(collegs => collegs.collegeRegId !== id)});
       alert(`College with colegeId ${id} deleted `)
       
    }
    viewCollege(id){
        
        
        this.props.history.push(`/admin/${this.state.name}/viewCollege/${id}`);
    }
    editCollege(id){
        this.props.history.push(`/${this.state.name}/updateCollege/${id}`);
    }

    componentDidMount(){
        UniversityService.getUniversities().then((res) => {
            this.setState({ universities: res.data});
            console.log(res);
        });
    }

   

    cancel(){
        this.props.history.push(`/admin/${this.state.name}`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Colleges List</h2>
                 <div className = "row">
                   
                 </div>
               
                 <br></br>
                 <div class="Cancelbutton">
                 <button onClick={this.cancel} className="btn btn-primary">Back </button>
                 </div>
                 <div className = "row" class="table">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th> University Name</th>
                                    
                                    <th>College Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.universities.map(
                                        university => 
                                        <tr key = {university.universityId}>
                                             <td class="uni">  { university.universityId} </td>
                                             <td class="uni"> { university.name} </td>   
                                             
                                             <td > {university.collegeList.map(college=>
                                           
                                               <ul class="collegeColumn"><li> {college.collegeName}
                                               
                                               
                                                
                                               
                                               </li></ul>
                                                
                                               
                                             
                                                
                                                
                                                
                                                
                                                
                                                
                                                )}</td>

                                        <td> {university.collegeList.map(college=>
                                             <tr key={college.collegeRegId}>
                                               
                                               <td>
                                                 <button onClick={ () => this.editCollege(college.collegeRegId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCollege(college.collegeRegId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCollege(college.collegeRegId)} className="btn btn-info">View </button>
                                             </td>
                                             
                                                
                                                
                                                </tr>
                                                
                                                
                                                
                                                )}</td>
                                             
                                           
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCollegesComponent
