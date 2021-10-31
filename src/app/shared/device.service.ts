import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44374/api/devices';
  formData: Device = new Device ();
  list: Device[];
  

  postRecord(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putRecord(){
    //console.log(this.formData);
    return this.http.put(`${this.baseURL}/${this.formData.deviceId}`, this.formData);
  }

  deleteRecord(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Device[]);
  }
}
