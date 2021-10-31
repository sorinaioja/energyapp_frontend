import { Component, OnInit } from '@angular/core';
import { SensorService } from '../shared/sensor.service';
import { Sensor } from '../shared/sensor.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styles: [
  ]
})
export class SensorComponent implements OnInit {

  constructor(public service: SensorService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectedRecord:Sensor){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteSensor(id)
      .subscribe(
        res=>{
          this.service.refreshlist();
          this.toastr.error("Deleted succesfully", "Sensor Register");
        },
        err => {console.log(err)}
      )
    }
  }
}
