import React, { Component } from 'react';
//import ListAllUniversitiesComponent from './ListAllUniversitiesComponent';

class Homepage extends Component {
    constructor(props){
        super(props)

        this.state = {
            programsList:[{programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}],
     clgProgList:[{programName:"sadasd",programDescription:"sadasd",programDuration:'asdsd',programEligibility:'asdasd',degreeOffered:'sadasds'}]
        
        }
        this.add=this.add.bind(this)
        this.push=this.push.bind(this)
    }


      add(e){
            e.preventDefault()

        const program={programName:"",programDescription:"",programDuration:'',programEligibility:'',degreeOffered:''}
        this.setState({programList:this.state.programsList.push(program)})
      }

      push(e){
          e.preventDefault()
       

 


        
     console.log(this.state.programsList)
      }

      changeInput(e,index){

let values =this.state.programsList
values[index][e.target.name]=e.target.value

this.setState({programsList:values})

console.log(this.state.programsList)
    
    }

    handleRemoveClick(index){


        const values= this.state.programsList

        values.splice(index,1)
    this.setState({prprogramsListogList:values})
    
    }

    
    render() {
      
    
        return (

            
            <div>
         {/*     <h1>HomePage</h1>
              <nav>
                <nav-item>
                
                <a href="/login">Admin Login</a> <br />
                <a href="/Student-login">Student Login</a> <br />
                
                    
                    
                </nav-item>
                </nav>  
<ListAllUniversitiesComponent/>
         */}


         <form style={{marginTop:'100px',size:'100px'}} class="programForm">


         {this.state.programsList.map((program,index)=>
                                        <div>
                                    <div className = "form-group">
                                        <h2>program {index+1}</h2>
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
<div class="saveOption">
<button type="submit" style={{marginLeft: "30px",marginTop:"10px"}} className="btn btn-success"onClick={this.push}>Save</button>
                                    <button className="btn btn-danger"  style={{marginLeft: "30px",marginTop:"10px"}  }>Cancel</button>
                                    </div>

         </form>
            </div>
        );
    }
}

export default Homepage;