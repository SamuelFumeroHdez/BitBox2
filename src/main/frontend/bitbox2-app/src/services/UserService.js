import axios from 'axios';


export const UserService = ()=>{
    
    const baseUrl = "http://localhost:8080/api/users/";
    return axios.get(this.baseUrl).then(res => res.data);
    
}

export default UserService;