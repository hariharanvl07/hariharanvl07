import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/university/";

class UniversityService {

    getUniversities(){
        return axios.get(EMPLOYEE_API_BASE_URL+"getAllUniversitys");
    }

    getUniversityByName(universityName){
        return axios.get(EMPLOYEE_API_BASE_URL+"getUniversityByName/"+universityName);
    }

    updateUniversity(id,university){
        return axios.put(EMPLOYEE_API_BASE_URL+"updateUniversity/"+id,university);
    }

}

export default new UniversityService()