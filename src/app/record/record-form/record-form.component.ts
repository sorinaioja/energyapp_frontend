import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Record } from 'src/app/shared/record.model';
import { RecordService } from 'src/app/shared/record.service';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styles: [
  ]
})
export class RecordFormComponent implements OnInit {

  constructor(public service: RecordService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.recordId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    
  }

  insertRecord(form:NgForm){
    this.service.postRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Submited successfully','Record Register')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Updated successfully','Record Register')
      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Record();
  }

}
