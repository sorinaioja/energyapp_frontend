import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44374/api/records';
  formData: Record = new Record ();
  list: Record[];
  

  postRecord(){
    //console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putRecord(){
    //console.log(this.formData);
    return this.http.put(`${this.baseURL}/${this.formData.recordId}`, this.formData);
  }

  deleteRecord(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Record[]);
  }
}
