import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';




class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            userName: '',
            password: '',
            error:''
           
        }
        this.continue=this.continue.bind(this)
    }

ChangeUserName=(e)=>{
    this.setState({userName:e.target.value})
}
ChangePassword=(e)=>{
    this.setState({password:e.target.value})
}

continue=(e)=>{
  
    if(this.state.userName==='hari'&&this.state.password==='hari')
  { 
   
    this.props.history.push(`/student/${this.state.userName}`)
  }
  else
  this.setState({error:"incorrect username or password!"})

}
    
    render() {
        
        return (
            <div class="login">
            
 <MuiThemeProvider>
<AppBar title="Enter Personal Details" />
<span class="badge rounded-pill bg-primary badge-font-size:2em lbadge">Login</span>  

         <div>
                
            <TextField
              placeholder="username"
              label="Username"
            onChange={this.ChangeUserName}
              margin="normal"
             
            />
            <br />
            <TextField
              placeholder="password"
              label="Password"
              onChange={this.ChangePassword}
            
              margin="normal"
             
            />
            </div>
            {this.state.error}<br></br>

<Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            
 </MuiThemeProvider>
 
            </div>
            
            
        );
        
    }

  

}

export default Login;