import React, { Component } from 'react';



class AddressComponent extends Component {

    constructor(props){
super(props)

this.state={
    city:this.props.data.address.city,
    state:this.props.data.address.state,
    country:this.props.data.address.country,
    district:this.props.data.address.district,
    zipcode:this.props.data.address.zipcode


}
this.changeCity=this.changeCity.bind(this)
this.changeState=this.changeState.bind(this)
this.changeCountry=this.changeCountry.bind(this)
this.changePincode=this.changePincode.bind(this)
this.changeDistrict=this.changeDistrict.bind(this)
    }

componentDidMount(){

this.setState({ city:this.props.data.address.city,
    state:this.props.data.address.state,
    country:this.props.data.address.country,
    district:this.props.data.address.district,
    zipcode:this.props.data.address.zipcode})

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





    render(){
        return(
           <div>
        

<form >

    <input type="text" placeholder="city" onChange={this.changeCity} value= {this.state.city} />
    <input type="text" placeholder="state" onChange={this.changeState} value={this.state.state}/>
    <input type="text" placeholder="country"onChange={this.changeCountry}value={this.state.country}/>
    <input type="text" placeholder="pincode"onChange={this.changePincode}value={this.state.zipcode}/>
    <input type="text" placeholder="district"onChange={this.changeDistrict}value={this.state.district}/>
    
     <br />
    <br />

   

    <button className="btn btn-success" onClick={(e)=>this.props.data.changeAddress(e,{city:this.state.city,state:this.state.state,country:this.state.country,zipcode:this.state.zipcode,district:this.state.district})}>Save</button>
 <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>



</form>



           </div> 
        )
    }
}
export default AddressComponent;