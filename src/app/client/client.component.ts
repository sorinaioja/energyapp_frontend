import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public service: ClientService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectedRecord:Client){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteClient(id)
      .subscribe(
        res=>{
          this.service.refreshlist();
          this.toastr.error("Deleted succesfully", "Client Register");
        },
        err => {console.log(err)}
      )
    }
  }

}
