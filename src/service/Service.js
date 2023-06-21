import axios from 'axios';


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

    newUser(url, data , fileInput){
        var myHeaders = new Headers();
        //const stringParams = JSON.stringify(params);
        //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY4ODU0ODQzMCwibm9tYnJlIjoiYSJ9.KFYAcE18M0pdErMfPPQEZKbk8lwy0BzP_GyJIbSxkl7kphuKrGAh3yX13FeuPTvGH0m5Fkh9gjfdkYmS1ij68g");
        myHeaders.append('Content-Type', 'multipart/form-data; boundary= 50000');
       //myHeaders.append('Content-Type', 'application/json');
      
        var formdata = new FormData();
        formdata.append("user", data);
        formdata.append("image", fileInput, fileInput.name);
       
        console.log(data);
        var requestOptions = {
          method: 'POST',
          maxBodyLength: Infinity,
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch(this.joinUrl(url), requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    // newUser(url, params = null, fileInput){
    //     const formdata = new FormData();
    //     console.log('entra a new user');
    //     console.log(fileInput);
    //     const myJSON = JSON.stringify(params);
    //      url = joinUrl(this.domain,url);
    //     formdata.append("user", myJSON);
    //     formdata.append("image",fileInput, fileInput.name);
        
    //     let config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         mode: 'cors',
    //         url: url,
    //         headers: { 
    //            // 'Authorization': token(),
    //            'Access-Control-Allow-Origin': '*',
    //         //    'Content-Type': 'multipart/form-data',
    //          ...formdata.get('image'),
    //          ...formdata.get('user')
    //         },
    //         data : params
    //     };
    //    return axios.request(config)
    //         .then((response) => {
    //              console.log(JSON.stringify(response.data));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }


}

export default Service;