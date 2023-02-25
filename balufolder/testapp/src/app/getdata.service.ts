import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private getda:HttpClient) { 

  }

  loginformser(data:any){
  console.log("login service method working");
  if(data.username=="chmkmuralikrishna@gmail.com" && data.password=="welcome"){
    return true;
  } else {
    return false;
  }

  }

  getdataapi():Observable<any>{
    return this.getda.get('https://jsonplaceholder.typicode.com/posts');
  }

  postdatapi(payload:any):Observable<any>{
    return this.getda.post('https://jsonplaceholder.typicode.com/posts',payload);
  }
  
}
