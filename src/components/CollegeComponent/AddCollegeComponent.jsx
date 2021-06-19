import React, { Component } from 'react';
//import CollegeService from '../Services/CollegeService';
import UniversityService from '../../Services/UniversityService';


//import UniversityService from '../Services/UniversityService';
class AddCollegeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:this.props.match.params.name,
            

            collegeList:[],
         
            collegeName: '',
           
            collegeAddress:{},
        
           universities:[],
           

           university:{},
           error:{
            name:''


           },
           city:'',
           state:'',
           country:'',
           district:'',
           zipcode:'',
                  
       
                  college:{},



        
        
        }
      
      
    this.changeCollegeNameHandler=this.changeCollegeNameHandler.bind(this)
        //this.addNewRow =this.addNewRow.bind(this);  
        this.deteteRow =this.deteteRow.bind(this); 
        this.handleQuerryChange =this.handleQuerryChange.bind(this);  
        this.addQuerry=this.addquerry.bind(this);
        this.save=this.save.bind(this)
        this.changeOption=this.changeOption.bind(this)
        this.changeState=this.changeState.bind(this)
this.changeCountry=this.changeCountry.bind(this)
this.changePincode=this.changePincode.bind(this)
this.changeDistrict=this.changeDistrict.bind(this)
this.changeCity=this.changeCity.bind(this)
        
    }


    componentDidMount(){
UniversityService.getUniversities().then((res)=>{

this.setState({universities:res.data})
})
               
    }












      
    



    changeCollegeNameHandler(e){
        this.setState({collegeName:e.target.value})
        
if(this.state.collegeName.length<4)
this.setState({error:{name:'college name mustbe atleast 5 characters'}})
else
this.setState({error:{name:''}})
        
    }
    
    
    changeAddressHandler(e){
let city=this.state.address.city
    city=e.target.value
    this.setState({address:city})
    }
  
   
    cancel(){
        this.props.history.push(`/admin/${this.state.name}`);
    }

 
    
    

    deteteRow = (index) => {
        this.setState({
            queRes: this.state.queRes.filter((s, sindex) => index !== sindex),
        });
      
    }
  
    clickOnDelete(record) {
        this.setState({
            querryresponse: this.state.querryresponse.filter(r => r !== record)
        });
    }
   

    receiveDataFromChild = (list) => {
        this.setState({queRes:list});
     
       
    
      }
      
addquerry(event){

    this.setState({queRes:this.state.queRes.concat([{index:Math.random(),querry:"",response:""}])})
    event.preventDefault();
}

   handleQuerryChange = (event , index)=>{
       
       console.log(index,event.target.name);
       const { name, value } = event.target;
       const list = this.state.queRes;
       list[index][name]= value;
       this.setState({queRes: list})
       console.log(JSON.stringify(list));
    event.preventDefault();

   }
  
   handleResponseChange = (event , index)=>{
    console.log(index,event.target.name);
    const { name, value } = event.target;
    const list = this.state.queRes;
    list[index][name]= value;
    this.setState({queRes: list})
    console.log(JSON.stringify(list));
 event.preventDefault();

}

 handleRemoveClick(index) {
    const list = this.state.queRes;
    list.splice(index-1,1);
    this.setState({queRes: list})
  };

  save(e){
     e.preventDefault();
     let address= {city:this.state.city,state:this.state.state,country:this.state.country,district:this.state.district,zipcode:this.state.zipcode}
  
     
   
      
      let College = {collegeName: this.state.collegeName, collegeAddress:address};

   
      
   
    

   
    this.setState({collegeList:this.state.collegeList.push(College)})
   

    let university ={collegeList:this.state.collegeList,name:this.state.university.name,address:this.state.university.address}
    let id= this.state.university.universityId
   
UniversityService.updateUniversity(id,university)
alert("College added!")

this.props.history.push(`/admin/${this.state.name}`);
 

      
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


changeOption(e){
    e.preventDefault();
    UniversityService.getUniversityByName(e.target.value).then((res)=>{
  this.setState({university:res.data,collegeList:res.data.collegeList})

    })

    

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
                            <div className = "row"style={{textAlign:'center'}} >
                         
                         <h4 className="text-center" >Add college</h4>
                         <div className = "card-body"></div>
                                
                                <form onSubmit={this.save}>
                               
                               
                                        <label > University: </label>
                                        
                                      <select onChange={this.changeOption}  style={{width:'500px'}} required>University
                                      <option selected>SELECT UNIVERSITY</option>
                                      {this.state.universities.map(univer=>
                                        
                                        <option value={univer.name}>{univer.name}</option>
                                        
                                        
                                        )}
                                      
                                      
                                      
                                      
                                      
                                      </select>
                                  


                                    <div className = "form-group">
                                        <label > College Name: </label>
                                        <input placeholder="collegeName" name="collegeName" className="form-control" 
                                      minLength="5"   value={this.state.collegeName} onChange={this.changeCollegeNameHandler}  autocomplete="off" required/>
                                    {this.state.error.name}
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
               </div>
               </div>
        
        )
    }
}
export default AddCollegeComponent
