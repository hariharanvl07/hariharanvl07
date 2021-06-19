import React, { Component } from 'react';
//import CollegeService from '../Services/CollegeService';
import CollegeService from '../Services/CollegeService';


//import UniversityService from '../Services/UniversityService';
class AddProgramComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:this.props.match.params.name,
            id:this.props.match.params.id,
            
            

            collegeList:[],
         
            programName: '',
            programDescription:'',
            programEligibility:'',
            programDuration:'',
            degreeOffered:'',

            programList:[],
            college:{},
            programsList:{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''},
           program:{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''},
        progList:[],

        index:0

        
        
        }
      
      
 
       this.addMoreProgram=this.addMoreProgram(this) 
      
        this.changeAddress=this.changeAddress.bind(this)
        this.changeOption=this.changeOption.bind(this)
       this.changeDegreeHandler=this.changeDegreeHandler.bind(this)
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this)
        this.changeDurationHandler=this.changeDurationHandler.bind(this)
        this.changeEligibilityHandler=this.changeEligibilityHandler.bind(this)
        this.changeNameHandler=this.changeNameHandler.bind(this)
        this.add=this.add.bind(this)
        this.changeInput=this.changeInput.bind(this)
    }


    componentDidMount(){
CollegeService.getCollege().then((res)=>{

this.setState({collegeList:res.data,progList:res.data.programList})


})
               
    }












      
    



   
  
   
    cancel(){
        this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}`);
    }

 
    //program//////////////////////////////////////////
    add(e){
 e.preventDefault()
  const program={programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}
  this.setState({programList:this.state.programList.concat(program)})
//window.location.reload()
  console.log(this.state.programList)

  /**/
}



changeInput(e,index){


console.log(index)

let values =this.state.programList

values[index][e.target.name]=e.target.value

this.setState({programList:values})
console.log(this.state.programList)





}

handleRemoveClick(e,index){
e.preventDefault()
console.log(index)
  const values= this.state.programList

  values.splice(index,1)
this.setState({programList:values})

}

   
////////////////////////////////////////
  
      

  
  



  changeAddress(e){
     e.preventDefault();
     
  console.log("values entered")
  console.log(this.state.programList)
 
 //let program=this.state.programsList



  
  
     // let program ={programName:this.state.programName,programDescription:this.state.programDescription,programEligibility:this.state.programEligibility,programDuration:this.state.programDuration,degreeOffered:this.state.degreeOffered}
      
 

let college ={collegeName:this.state.college.collegeName,collegeAddress:this.state.college.collegeAddress,programList:this.state.programList}

let id =this.state.college.collegeRegId


CollegeService.updateCollege(id,college)

this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}`);
window.location.reload()



      
  }
changeOption(e){
    CollegeService.getCollegeByName(e.target.value).then((res)=>{
  this.setState({college:res.data,programList:res.data.programList})
  const program={programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}
  this.setState({programList:this.state.programList.concat(program)})


  
       
console.log(this.state.programList)

  
 


    })
}

changeNameHandler(e){
    this.setState({programName:e.target.value})
}
  changeDegreeHandler(e){
      this.setState({degreeOffered:e.target.value})
  }
 

changeEligibilityHandler(e){
    this.setState({programEligibility:e.target.value})
}

changeDescriptionHandler(e){
    this.setState({programDescription:e.target.value})


}



addMoreProgram(e){
  let college ={collegeName:this.state.college.collegeName,collegeAddress:this.state.college.collegeAddress,programList:this.state.progList}
let id =this.state.college.collegeRegId


CollegeService.updateCollege(id,college)

this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}/addProgram`);


}






changeDurationHandler(e){

    this.setState({programDuration:e.target.value})
}
    render() {
        return (
            <div>
      <div className = "container">

             
             
            <br></br>
               <div className = "container" class="addCollege">
                    <div className = "row" class="createCall">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className = "card-body">
                            <div className = "row" >
                         
                         <h3 className="text-center" style={{textAlign:'center'}}>Add Program</h3>
                         <div className = "card-body"></div>
                                
                                <form onSubmit={this.changeAddress}>
                                  
                               
                                        <label > COLLEGE: </label>
                                        
                                      <select onChange={this.changeOption}  style={{width:'500px'}} required>COLLEGE
                                      <option selected>SELECT COLLEGE</option>
                                      {this.state.collegeList.map(college=>
                                        
                                        <option value={college.collegeName}>{college.collegeName}</option>
                                        
                                        
                                        )}

                                        
                                      
                                      
                                      
                                      
                                      
                                      </select>
                                      
                                    
                         
                           
                   

                                      {this.state.programList.map((program,index)=>
                                        <div>
                                    <div className = "form-group">
                                        <h4>program {index+1} </h4>
                                        <label > Program Name: </label>
                                        <input placeholder="programName" name="programName" className="form-control" 
                                      minLength="5"   value={program.programName}onChange={e=>this.changeInput(e,index)}   autocomplete="off" required/>
                                 
                                    </div>

                                    <div className = "form-group">
                                        <label > Program Description: </label>
                                        <input placeholder="programDescription" name="programDescription" className="form-control" 
                                      minLength="5"   value={program.programDescription} onChange={e=>this.changeInput(e,index)}autocomplete="off" required/>
                                 
                                    </div>
                                    <div className = "form-group">
                                        <label > Program ELigibility: </label>
                                        <input  placeholder="programEligibility" name="programEligibility" className="form-control" 
                                      minLength="5"   value={program.programEligibility} onChange={e=>this.changeInput(e,index)}  autocomplete="off" required/>
                                 
                                    </div>   
                                        
                                    <div className = "form-group">
                                        <label > Program Duration: </label>
                                        <input placeholder="programDuration" name="programDuration" className="form-control" 
                                      minLength="5"   value={program.programDuration} onChange={e=>this.changeInput(e,index)} autocomplete="off" required/>
                                 
                                    </div>  

                                     <div className = "form-group">
                                        <label > DEGREE OFFERS: </label>
                                        <input  placeholder="degreeOffered" name="degreeOffered" className="form-control" 
                                      minLength="5"   value={program.degreeOffered} onChange={e=>this.changeInput(e,index)}  autocomplete="off" required/>
                                 
                                    
                                    
                                    
                              </div>

                              <div className="btn-box">
                                                    {this.state.programsList.length !== 1 && <button style={{marginLeft: "30px",marginTop:"10px"}} class="btn btn-danger" onClick={e=>this.handleRemoveClick(e,index)}>Remove</button>}
                                                     
                                                             </div>
                             
                             
                                    
                                                         
                                    
                                    
                                    </div>
                                    
                                     )

                                    
                                    
                                   
                                        }

 <button style={{marginLeft: "30px",marginTop:"10px"}} class="btn btn-primary " onClick={e=>this.add(e)}>Add</button>
<hr />








                                   
                                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
 Program Saved
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ADD PROGRAM</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Do you want to add more programs
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">add More</button>
        <button type="button" class="btn btn-primary" onClick={this.changeAddress}>No</button>
      </div>
    </div>
  </div>
</div>
                                  



                                 
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
               </div>
               </div>
               </div>
        )
    }
}
export default AddProgramComponent
