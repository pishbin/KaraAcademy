import axios from 'axios';
const insWebApi1 = axios.create({
    baseURL: 'http://localhost:8025/api/',
    
   
})

if(localStorage.getItem('api_token')!=null){
  
   insWebApi1.defaults.headers.common['Authorization'] = "Bearer " +  localStorage.getItem ('api_token');
   }
   insWebApi1.defaults.headers.post['Content-Type'] ='application/json'
export default insWebApi1;


