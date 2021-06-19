
import React, { Component } from 'react'
import CollegeService from '../../Services/CollegeService'
import ProgramService from '../../Services/ProgramService'

class ViewCollegeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name:this.props.match.params.name,
            college: {},
            address:{},
            programs:[],
            button:''
            
        }
    this.button=this.button.bind(this)
    }

    componentDidMount(){
        CollegeService.getCollegeById(this.state.id).then( res => {
            this.setState({college: res.data,address:res.data.collegeAddress,programs:res.data.programList});
        
           if(this.state.programs.length===0)
           this.setState({button:'visible'})
           else
           this.setState({button:'hidden'})
          
            console.log(this.state.button)
        })
   
    }

    button(){
      

    }

    cancel(){

        this.props.history.push(`/admin/${this.state.name}/ListColleges`);
    }



update(id){

    this.props.history.push(`/${this.state.name}/${this.state.college.collegeRegId}/UpdateProgram/${id}`);
}

removePorgram(id){
    ProgramService.deleteProgramById(id).then( res => {
            this.setState({programs: this.state.programs.filter(prog => prog.Id !== id)})
        this.props.history.push(`/admin/${this.props.match.params.name}/viewCollege/${this.state.id}`);
    window.location.reload()   
    });
       
       
        console.log(this.state.universities)
        //this.setState({universities: this.state.universities.map(university=>university.collegeList).filter(collegs => collegs.collegeRegId !== id)});
       alert(`College with colegeId ${id} deleted `)
       
    }
addProgram(){
    this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}/addProgram`);

}

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" class="viewCollege">
                <button className="btn btn-success" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    <h3 className = "text-center"> College Details</h3>
                    <div className = "card-body" class="viewBody">
                        <table>
                            <tr>
                        <div className = "row">
                            <td><h6><label> College Name: </label></h6></td>
                            <td><div> { this.state.college.collegeName }</div></td>
                        </div>
                        </tr>
                        <tr>
                        <div className = "row">
                           <td> <h6><label> CollegeAddress: </label></h6></td>
                             <td>{ this.state.address.city }    </ td>
                             <td>{ this.state.address.state }    </td>
                             <td>{ this.state.address.country }  </td>
                             <td>{ this.state.address.district } </td>
                             <td>{ this.state.address.zipcode }  </td>
                        </div>
                        </tr>
                        </table>
                        <div className = "row">
                       <h6> <label >Programs Offered:</label></h6><br />  <br />
                      

                        <div className = "row" class="programList">
                        <button  className="btn btn-primary" onClick={this.addProgram.bind(this)} >Add Program</button>
                        <table>
                        {this.state.programs.map((program,index)=>
                       <h6>
                           <ul class="program"  key={program.programId}>
                              <label style={{marginRight:'500px',marginTop:'10px'}}>{index+1}.</label> 
                               <table style={{columnSpan:'100px',textAlign:'left'}}>
                               <td>
                              <tr><td><label>Program Name : </label></td><td>{program.programName}</td></tr>
                              <tr><td><label>Program Description : </label></td>  <td>{program.programDescription}</td></tr>
                              <tr><td> <label>Program Eligilibility : </label>  </td>  <td>{program.programEligibility} %</td></tr>
                               
                              <tr><td> <label>Program Duration : </label>  </td>  <td>{program.programDuration} year(s)</td></tr>
                              <tr><td><label>Degree Offered : </label></td> <td>  {program.degreeOffered}</td></tr>
                              </td>
                              <td>
                              
                              <button className="btn btn-info"  onClick={()=>{this.update(program.programId)}}  style={{marginTop: "10px",marginLeft: "30px"}}>Modify</button>
                              <button className="btn btn-danger"  onClick={()=>{this.removePorgram(program.programId)}}  style={{marginTop: "10px",marginLeft: "30px"}}>Delete</button>

                              <button className="btn btn-warning" onClick={this.cancel.bind(this)} style={{marginTop: "10px",marginLeft: "20px"}}>View Courses</button>

                              </td>
                              </table>
                          
                               <hr />
                           
                           
                           
                           </ul> 
                           </h6>
                          
                            )} </table>
                            </div>
                        </div>
                        
                     
                        <div className = "row">
                           
                            <div></div>
                        </div>
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCollegeComponent
