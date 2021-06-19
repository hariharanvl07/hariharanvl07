import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/user/";

class CollegeService {

    getCollege(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllColleges");
    }
    addCollege(college){
        return axios.post(EMPLOYEE_API_BASE_URL+"addCollege/",college);
    }
    updateCollege(clgId, clg){
        return axios.put(EMPLOYEE_API_BASE_URL + 'updateCollege/'+clgId , clg);
    }

    getCollegeById(clgId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'getCollegeById/'+clgId);
    }

    deleteCollegeById(clgId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'deleteCollegeById/'+clgId);
    }

}


export default new CollegeService()