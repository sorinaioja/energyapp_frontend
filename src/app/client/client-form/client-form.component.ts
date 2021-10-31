import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { NgForm } from '@angular/forms'; 
import { Client } from 'src/app/shared/client.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styles: [
  ]
})
export class ClientFormComponent implements OnInit {

  constructor(public service:ClientService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      if(this.service.formData.clientId==0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
      
  }

  insertRecord(form:NgForm){
    this.service.postClient().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Submited successfully','Client Register')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putClient().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Updated successfully','Client Register')
      },
      err => {console.log(err); }
    );
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Client();
  }

}
