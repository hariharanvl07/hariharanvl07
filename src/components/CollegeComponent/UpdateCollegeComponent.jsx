import React, { Component } from 'react';
import CollegeService from '../../Services/CollegeService';
//import CollegeService from '../Services/CollegeService';
import UniversityService from '../../Services/UniversityService';


//import UniversityService from '../Services/UniversityService';
class UpdateCollegeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:this.props.match.params.name,
            
            id:this.props.match.params.id,

            collegeList:[],
         
            collegeName: '',
           
            collegeAddress:{},
        
           universities:[],
           city:'',
    state:'',
    country:'',
    district:'',
    zipcode:'',
           

           college:{},
           s:{}
        

        
        
        }
      
      
    this.changeCollegeNameHandler=this.changeCollegeNameHandler.bind(this)
    this.changecollegeNameHandler=this.changecollegeNameHandler.bind(this)
        //this.addNewRow =this.addNewRow.bind(this);  
     
        this.save=this.save.bind(this)
        this.changeOption=this.changeOption.bind(this)
        this.changeCity=this.changeCity.bind(this)
this.changeState=this.changeState.bind(this)
this.changeCountry=this.changeCountry.bind(this)
this.changePincode=this.changePincode.bind(this)
this.changeDistrict=this.changeDistrict.bind(this)
        
    }


    componentDidMount(){
CollegeService.getCollegeById(this.state.id).then((res)=>{

this.setState({college:res.data,
    collegeName:res.data.collegeName,
    city:res.data.collegeAddress.city,
    state:res.data.collegeAddress.state,
    country:res.data.collegeAddress.country,
    zipcode:res.data.collegeAddress.zipcode,
    district:res.data.collegeAddress.district
    
})
})
               
    }












      
    



    changeCollegeNameHandler(e){

        this.setState({collegeName:e.target.value})
    }

    changeCity(e){

        this.setState({city:e.target.value})
    }

    changeCountry(e){
        this.setState({country:e.target.value})
    }
    
    changeState(e){
        this.setState({state:e.target.value})
    }
    
    changePincode(e){
        this.setState({zipcode:e.target.value})
    }


    changeDistrict(e){
        this.setState({district:e.target.value})
    }

    
    changeAddressHandler(e){
let city=this.state.address.city
    city=e.target.value
    this.setState({address:city})
    }
  
   
    cancel(){
        this.props.history.push(`/admin/${this.state.name}/ListColleges`);
    }

 
    
    

  



  







  save(e){
     e.preventDefault();
    
  
     let address= {city:this.state.city,state:this.state.state,country:this.state.country,district:this.state.district,zipcode:this.state.zipcode}
    
    



   
  
      let College={collegeName:this.state.collegeName,collegeAddress:address}
   
    
  
   CollegeService.updateCollege(this.state.id,College)
   
alert("Infomation Updated!")
this.props.history.push(`/admin/${this.state.name}`);
  
 

      
  }
changeOption(e){
    e.preventDefault();
    UniversityService.getUniversityByName(e.target.value).then((res)=>{
  this.setState({university:res.data,collegeList:res.data.collegeList})
  console.log(this.state.university)
    })

    

}

changecollegeNameHandler(e){
    e.preventDefault()

    this.setState({collegeName:e.target.value})
}

  
 
    render() {
        return (
            <div>
            <div className = "container">
                      
                   
                  <br></br>
                     <div className = "container" class="addCollege">
                          
                              <div className = "card col-md-6 offset-md-3 offset-md-3">
                                 
                                  <div className = "card-body">
                              
                               
                               <h4 className="text-center" >Upadate college</h4>
                               <div className = "card-body"></div>
                                      
                                      <form onSubmit={this.save} class="form">
                                     
                                     
                                              
                                           
                                        
      
      
                                          <div className = "form-group">
                                              <label > College Name: </label>
                                              <input placeholder="collegeName" name="collegeName" className="form-control" 
                                            minLength="5"   value={this.state.collegeName} onChange={this.changeCollegeNameHandler}  autocomplete="off" required/>
                                        
                                          </div>
                                              
                                          <div className = "form-group">
                                              <label> College Address: </label>
                                              <input  placeholder="city" name="city" className="form-control" 
                                            value={this.state.city } autocomplete="off" onChange={this.changeCity}   required/>
                                          
                                          
                                         
                                          
                                          
                                          
                                          </div>
                                          <div className = "form-group">
                                          <input  placeholder="District" name="District" className="form-control" 
                                           value={this.state.district } autocomplete="off" onChange={this.changeDistrict}   required/>
                                      
                                  
                                      </div>
      
                                          <div className = "form-group">
                                          <input  placeholder="State" name="State" className="form-control" 
                                           value={this.state.state } autocomplete="off" onChange={this.changeState}   required/>
                                      
                                  
                                      </div>
                                      <div className = "form-group">
                                          <input  placeholder="Country" name="Country" className="form-control" 
                                           value={this.state.country } autocomplete="off" onChange={this.changeCountry}   required/>
                                      
                                  
                                      </div>
                                      <div className = "form-group">
                                          <input type="number"  placeholder="ZipCode" name="zipcode" className="form-control" 
                                           value={this.state.zipcode } autocomplete="off" onChange={this.changePincode}   required/>
                                      
                                  
                                      </div>
                                      
                                      
                           
                                         
      
                                        
      
      
                                        <button type="submit" className="btn btn-success"><i class="fab fa-android" ></i>Save</button>
                                          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                      </form>
                                  </div>
                              </div>
                          
      
                     
                     </div>
                     </div>
                     </div>
        )
    }
}
export default UpdateCollegeComponent
