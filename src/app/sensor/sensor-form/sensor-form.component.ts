import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/shared/sensor.model';
import { NgForm } from '@angular/forms'; 
import { SensorService } from 'src/app/shared/sensor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styles: [
  ]
})
export class SensorFormComponent implements OnInit {

  constructor(public service: SensorService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.sensorId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    
  }

  insertRecord(form:NgForm){
    this.service.postSensor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Submited successfully','Sensor Register')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putSensor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Updated successfully','Sensor Register')
      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Sensor();
  }

}
