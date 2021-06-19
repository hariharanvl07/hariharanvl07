
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage';
import AdminDashBoard from './components/AdminDashBoard';
import StudentDashBoard from './components/StudentDashBoard';

import Login from './components/Login';
import StudentLogin from './components/StudentLogin';
import AddCollegeComponent from './components/CollegeComponent/AddCollegeComponent';
import updateCollegeComponent from './components/CollegeComponent/UpdateCollegeComponent';
import ListCollegesComponent from './components/CollegeComponent/ListCollegesComponent';
import ViewCollegeComponent from './components/CollegeComponent/ViewCollegeComponent';
import AddProgramComponent from './components/AddProgramComponent';
import UpdateProgramComponent from './components/UpdateProgramComponent';
//import UpdateAddressComponent from './components/UpdateAddressComponent';
//import ListAllUniversitiesComponent from './components/ListAllUniversitiesComponent';


function App() {
  return (
    <div className="App">
                <nav class="navbar fixed-top navbar-dark bg-info">
<a class="navbar-brand" href="/">Online Addmission System</a>
<a class="navbar-brand" href="/login">Admin</a>
<a class="navbar-brand" href="/Student-login">Apply Now</a>

</nav>
      <Router>
      
      <Switch>
                  
                          <Route  path = "/" exact component = {Homepage}></Route>
                          <Route  path = "/admin/:name" exact component = {AdminDashBoard}></Route>
                          <Route  path = "/admin/:name/addCollege" exact component = {AddCollegeComponent}></Route>
                          <Route  path = "/admin/:name/viewCollege/:id/addProgram" exact component = {AddProgramComponent}></Route>
                          <Route  path = "/student/:name" exact component = {StudentDashBoard}></Route>
                           <Route  path = "/:name/updateCollege/:id" exact component = {updateCollegeComponent}></Route>
                           <Route  path = "/:name/:cname/updateprogram/:id" exact component = {UpdateProgramComponent}></Route>
                          <Route  path = "/login" exact component = {Login}></Route>
                          <Route  path = "/Student-login" exact component = {StudentLogin}></Route>
                          <Route  path = "/admin/:name/ListColleges" exact component = {ListCollegesComponent}></Route>
                          
                          <Route  path = "/admin/:name/viewCollege/:id" exact component = {ViewCollegeComponent}></Route>
                          
                          </Switch>   
  
          
        </Router>
      
    </div>
  );
}

export default App;
