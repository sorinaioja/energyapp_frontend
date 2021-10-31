import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  formData:User = new User();
  readonly baseURL = 'https://localhost:44374/api/login';
  list: User[];

  login(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }
  
  /*
  postUser(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }
  putUser(){
    //console.log(this.formData);
    return this.http.put(`${this.baseURL}/${this.formData.userId}`, this.formData);
  }

  deleteSensor(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as User[]);
  }
  */
}
