import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44374/api/clients';
  formData: Client = new Client();
  list: Client[];
  

  postClient(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putClient(){
    //console.log(this.formData);
    return this.http.put(`${this.baseURL}/${this.formData.clientId}`, this.formData);
  }

  deleteClient(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Client[]);
  }
}
