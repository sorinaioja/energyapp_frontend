import { Injectable } from '@angular/core';
import { Sensor } from './sensor.model';
import { HttpClient } from "@angular/common/http";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http:HttpClient) { }

  formData:Sensor = new Sensor();
  readonly baseURL = 'https://localhost:44374/api/sensors';
  list: Sensor[];

  postSensor(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putSensor(){
    //console.log(this.formData);
    return this.http.put(`${this.baseURL}/${this.formData.sensorId}`, this.formData);
  }

  deleteSensor(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Sensor[]);
  }
}
