
import axios from 'axios';
import insWebApi1 from './instanseWebApi1_config';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
   
    return config;
}, function (error) {
    // Do something with request error
     //sent errot to log service
    
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('axios.interceptors.response_secOne');
    console.log(response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  
    //sent errot to log service
    
    return Promise.reject(error);
});









// Add a request interceptor
insWebApi1.interceptors.request.use(function (config) {
  
   // console.log(config);
    return config;
}, function (error) {
    // Do something with request error
  
    console.log(error);
    
    return Promise.reject(error);
});

// Add a response interceptor
insWebApi1.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
   

    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  
    console.log(error);
    return Promise.reject(error);
});

