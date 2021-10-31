import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Device } from '../shared/device.model';
import { DeviceService } from '../shared/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(public service: DeviceService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectedRecord:Device){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteRecord(id)
      .subscribe(
        res=>{
          this.service.refreshlist();
          this.toastr.error("Deleted succesfully", "Device Register");
        },
        err => {console.log(err)}
      )
    }
  }

}
