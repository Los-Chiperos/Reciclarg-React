import axios from 'axios';
//import fs from 'fs'


let headers = { 
          'Content-Type': 'application/json'
        };
function config(method, url, params ) {
 return  { method: method,
        maxBodyLength: Infinity,
        url: url,
        headers: headers,
        data : params  } 
        }


class Service{


    constructor(){
        this.domain = 'http://localhost:8080';
        this.url1 = 'https://reciclarg-backend-production.up.railway.app';
        this.url2 = 'https://api.reciclarg.cloud/auth';
  
    }

    token(){
        return localStorage.getItem('token');
    }

    joinUrl(url){
        return this.domain +'/'+ url;
    }   
    Headers(){
        var myHeaders = new Headers();
        myHeaders.append()
    }
//  --------------------------------------------
    async login(url, data = null){
        console.log('entro login');
            url = this.joinUrl(url);
        return   axios.request(config('post',url,data))
            .then((response) => {
                 if(response.status == 200){       
                    var token = response.headers.get('Authorization');
                    localStorage.setItem('token',token);                           
                 }
                return response;
                
                }
                 
            ).catch((error) => {
                console.log(error); 
                              
            })
            ;
    }

   async getZonas(url, data = null){
        url = this.joinUrl(url);
        return   axios.request(config('get',url,data))
                .then((response) => {
                return response.data;                
                })                 
                .catch((error) => {
                console.log(error);                               
                });               
    }

    async listarMarcadores(url, data = null){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", this.token());

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          body : data,
          redirect: 'follow'
        };

     const response = await   fetch(this.joinUrl(url), requestOptions);
     const Markes = await response.json();
     return Markes;
        //   .then(response =>  response.body)
        //   //.then(result => console.log(result))
        //   .catch(error => console.log('error', error));
    }

    async newUser(url,data,fileInput){
        let formdata = new FormData();
        formdata.append('image', fileInput);
        formdata.append("userString", data);

         var myHeaders = new Headers();          
         myHeaders.append('Content-Type', 'multipart/form-data; boundary= 50000');

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: this.joinUrl(url),
          data : formdata,
          headers:myHeaders          
          
        };

        return   axios.request(config)
            .then((response) => {
                return response;
                
                }                 
            ).catch((error) => {
                console.log(error); 
                              
            })
            ;
        // async function makeRequest() {
        //     try {
        //       const response = await axios.request(config);
        //       //console.log(JSON.stringify(response.data));
        //       return response;
        //     }
        //     catch (error) {
        //       console.log(error);
        //     }
        // }

        // makeRequest();
    }

    async getNosotros(url, data = null){
        
            url = this.joinUrl(url);
        return   axios.request(config('get',url,data))
            .then((response) => {
                return response.data;                
                }                 
            ).catch((error) => {
                console.log(error);                               
            })
            ;
    }
    
}

export default Service;