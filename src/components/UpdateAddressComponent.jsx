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
            programsList:[{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}],
           program:{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''},
        progList:[],

        index:0

        
        
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
  this.setState({programList:this.state.programsList.push(program)})
}



changeInput(e,index){

let values =this.state.programsList
values[index][e.target.name]=e.target.value

this.setState({progList:values})
console.log(this.state.programList)
console.log(this.state.progList)




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


CollegeService.updateCollege(id,college)

this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}`);
window.location.reload()

/*alert("program added to "+this.state.college.collegeName)
this.props.history.push(`/admin/${this.state.name}/viewCollege/${this.state.id}`);
window.location.reload()  */ 
/*
      let College = {collegeName: this.state.collegeName,collegeAddress: this.state.collegeAddress};
    
let list=this.state.university.collegeList
      this.setState({collegeList:list.concat([{College}])})
    console.log(this.state.collegeList)*/

      
  }
changeOption(e){
    CollegeService.getCollegeByName(e.target.value).then((res)=>{
  this.setState({college:res.data,programList:res.data.programList})
  const program={programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}

  this.setState({programList:this.state.programList.push(program),index:this.state.programList.length})
  
       
//console.log(this.state.college.collegeName)
console.log(res.data.programList)
  
 


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
                                
                                <form onSubmit={this.changeAddress}>
                                  
                               
                                        <label > COLLEGE: </label>
                                        
                                      <select onChange={this.changeOption}  style={{width:'500px'}} required>COLLEGE
                                      <option selected>SELECT COLLEGE</option>
                                      {this.state.collegeList.map(college=>
                                        
                                        <option value={college.collegeName}>{college.collegeName}</option>
                                        
                                        
                                        )}

                                        
                                      
                                      
                                      
                                      
                                      
                                      </select>
                                      
                                    
                         
                           
                   

                                      {this.state.programsList.map((program,index)=>
                                        <div>
                                    <div className = "form-group">
                                        <h4>program {index}</h4>
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
                                        <input type="number"  placeholder="programEligibility" name="programEligibility" className="form-control" 
                                      minLength="5"   value={program.programEligibility} onChange={e=>this.changeInput(e,index)}  autocomplete="off" required/>
                                 
                                    </div>   
                                        
                                    <div className = "form-group">
                                        <label > Program Duration: </label>
                                        <input type="number" placeholder="programDuration" name="programDuration" className="form-control" 
                                      minLength="5"   value={program.programDuration} onChange={e=>this.changeInput(e,index)} autocomplete="off" required/>
                                 
                                    </div>  

                                     <div className = "form-group">
                                        <label > DEGREE OFFERS: </label>
                                        <input  placeholder="degreeOffered" name="degreeOffered" className="form-control" 
                                      minLength="5"   value={program.degreeOffered} onChange={e=>this.changeInput(e,index)}  autocomplete="off" required/>
                                 
                                    
                                    
                                    
                              </div>

                              <div className="btn-box">
                                                    {this.state.programsList.length !== 1 && <button style={{marginLeft: "30px",marginTop:"10px"}} class="btn btn-danger" onClick={() => this.handleRemoveClick(index)}>Remove</button>}
                                                     {this.state.programsList.length - 1 === index && <button style={{marginLeft: "30px",marginTop:"10px"}} class="btn btn-primary " onClick={(e,index)=>this.add(e,index)}>Add</button>}
                                                             </div>
                             
                             
                                    
                                                         
                                    
                                    
                                    </div>
                                    
                                     )

                                    
                                    
                                   
                                        }
<hr />







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
                                   

                                  


                                  <button type="submit" className="btn btn-success" onClick={this.changeAddress}><i class="fab fa-android" ></i>Save</button>
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
