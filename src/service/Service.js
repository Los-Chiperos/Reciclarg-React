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
function joinUrl(baseurl, url){
    return baseurl +'/'+ url;
}
class Service{

    constructor(){
        this.domain = 'http://localhost:8080';
        this.url1 = 'https://reciclarg-backend-production.up.railway.app';
        this.url2 = 'https://api.reciclarg.cloud/auth';
  
    }

   login(url, data = null){
        console.log('entro login');
            url = joinUrl(this.domain,url);
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



}

export default Service;