import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Device } from 'src/app/shared/device.model';
import { DeviceService } from 'src/app/shared/device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styles: [
  ]
})
export class DeviceFormComponent implements OnInit {

  constructor(public service: DeviceService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.deviceId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    
  }

  insertRecord(form:NgForm){
    this.service.postRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Submited successfully','Device Register')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Updated successfully','Device Register')
      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Device();
  }


}
