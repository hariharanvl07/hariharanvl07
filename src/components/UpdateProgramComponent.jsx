import React, { Component } from 'react';

import CollegeService from '../Services/CollegeService';
import ProgramService from '../Services/ProgramService';

class UpdateProgramComponent extends Component {

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
            collegeName:props.match.params.cname,
            programList:[],
            college:{},
            programsList:[{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}],
           
        progList:[],

        program:{}

        
        
        }
      
      
 
        
      
        this.changeAddress=this.changeAddress.bind(this)
        this.changeOption=this.changeOption.bind(this)
       this.changeDegreeHandler=this.changeDegreeHandler.bind(this)
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this)
        this.changeDurationHandler=this.changeDurationHandler.bind(this)
        this.changeEligibilityHandler=this.changeEligibilityHandler.bind(this)
        this.changeNameHandler=this.changeNameHandler.bind(this)
        
    }


    componentDidMount(){
CollegeService.getCollege().then((res)=>{

this.setState({collegeList:res.data})

})
    ProgramService.getProgram(this.state.id).then((res)=>{
this.setState({program:res.data})

       console.log(this.state.program)
    })           
    }












      
    

  

   
  
   
    cancel(){
        this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.collegeName}`);
    }

 
    //program//////////////////////////////////////////
    add(e){
      e.preventDefault()

  const program={programName:"",programDescription:""}
  this.setState({progList:this.state.programsList.push(program)})
}



changeInput(e){

let values =this.state.program
values[e.target.name]=e.target.value

this.setState({program:values})

console.log(this.state.program)
console.log(this.state.program.programId)


}

save(e){

    e.preventDefault()
   let program=this.state.program

 ProgramService.updateProgram(program.programId,program)
 alert("information updated")
 
 this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.collegeName}`);
 window.location.reload()

}

handleRemoveClick(index){


  const values= this.state.programsList

  values.splice(index,1)
this.setState({progList:values})

}

   
////////////////////////////////////////
  
      

  
  



  changeAddress(e){
     e.preventDefault();
     
   // let program ={programName:this.state.programName,programDescription:this.state.programDescription,programEligibility:this.state.programEligibility,programDuration:this.state.programDuration,degreeOffered:this.state.degreeOffered}
      
 

let college ={collegeName:this.state.college.collegeName,collegeAddress:this.state.college.collegeAddress,programList:this.state.progList}
let id =this.state.college.collegeRegId
console.log(college)
CollegeService.updateCollege(id,college)

alert("program added to "+this.state.college.collegeName)
this.props.history.push(`/admin/${this.state.name}`);
window.location.reload()

/*
      let College = {collegeName: this.state.collegeName,collegeAddress: this.state.collegeAddress};
    
let list=this.state.university.collegeList
      this.setState({collegeList:list.concat([{College}])})
    console.log(this.state.collegeList)*/

      
  }
changeOption(e){
    CollegeService.getCollegeByName(e.target.value).then((res)=>{
  this.setState({college:res.data,programList:res.data.programList})
       
console.log(this.state.college.collegeName)
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
                         
                         <h4 className="text-center" style={{textAlign:'center'}}>Add Program</h4>
                         <div className = "card-body"></div>
                                
                                <form onSubmit={this.changeAddress} style={{width:'500px'}}>
                                  
                                <div className = "form-group">
                                        <h2>{this.state.program.programName}   program </h2>
                                        <label > Program Name: </label>
                                        <input placeholder="programName" name="programName" className="form-control" 
                                      minLength="5"   value={this.state.program.programName}onChange={e=>this.changeInput(e)}   autocomplete="off" required/>
                                 
                                    </div>

                                    <div className = "form-group">
                                        <label > Program Description: </label>
                                        <input placeholder="programDescription" name="programDescription" className="form-control" 
                                      minLength="5"   value={this.state.program.programDescription} onChange={e=>this.changeInput(e)}autocomplete="off" required/>
                                 
                                    </div>
                                    <div className = "form-group">
                                        <label > Program ELigibility: </label>
                                        <input  placeholder="programEligibility" name="programEligibility" className="form-control" 
                                      minLength="5"   value={this.state.program.programEligibility} onChange={e=>this.changeInput(e)}  autocomplete="off" required/>
                                 
                                    </div>   
                                        
                                    <div className = "form-group">
                                        <label > Program Duration: </label>
                                        <input type="number" placeholder="programDuration" name="programDuration" className="form-control" 
                                      minLength="5"   value={this.state.program.programDuration} onChange={e=>this.changeInput(e)} autocomplete="off" required/>
                                 
                                    </div>  

                                     <div className = "form-group">
                                        <label > DEGREE OFFERS: </label>
                                        <input  placeholder="degreeOffered" name="degreeOffered" className="form-control" 
                                      minLength="5"   value={this.state.program.degreeOffered} onChange={e=>this.changeInput(e)}  autocomplete="off" required/>
                                 
                                    
                                    
                                    
                              </div>
                                    
                                        
                          
                                      
                                    
                         
                           
                   

                                      
                                    







{/* 



                                    <div className = "form-group">
                                        <label > Program Name: </label>
                                        <input placeholder="programName" name="programName" className="form-control" 
                                      minLength="5"   value={this.state.programName} onChange={this.changeNameHandler}  autocomplete="off" required/>
                                 
                                    </div>

                                    <div className = "form-group">
                                        <label > Program Description: </label>
                                        <input placeholder="programDescription" name="programDescription" className="form-control" 
                                      minLength="5"   value={this.state.programDescription} onChange={this.changeDescriptionHandler}  autocomplete="off" required/>
                                 
                                    </div>
                                    <div className = "form-group">
                                        <label > Program ELigibility: </label>
                                        <input  placeholder="programEligibility" name="programEligibility" className="form-control" 
                                      minLength="5"   value={this.state.programEligibility} onChange={this.changeEligibilityHandler}  autocomplete="off" required/>
                                 
                                    </div>   
                                        
                                    <div className = "form-group">
                                        <label > Program Duration: </label>
                                        <input type="number" placeholder="programDuration" name="programDuration" className="form-control" 
                                      minLength="5"   value={this.state.programDuration} onChange={this.changeDurationHandler}  autocomplete="off" required/>
                                 
                                    </div>  

                                     <div className = "form-group">
                                        <label > DEGREE OFFERS: </label>
                                        <input t placeholder="degreeOffers" name="degreeOffers" className="form-control" 
                                      minLength="5"   value={this.state.degreeOffered} onChange={this.changeDegreeHandler}  autocomplete="off" required/>
                                 
                                    </div> 
                                    

                                    
                                    
                                   
                                    
                                    
                                    
                                
*/}
                                   

                                  


                                  <button type="submit" className="btn btn-success" onClick={this.save.bind(this)}><i class="fab fa-android" ></i>Save</button>
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
export default UpdateProgramComponent;