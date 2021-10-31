import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Record } from '../shared/record.model';
import { RecordService } from '../shared/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(public service: RecordService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  populateForm(selectedRecord:Record){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteRecord(id)
      .subscribe(
        res=>{
          this.service.refreshlist();
          this.toastr.error("Deleted succesfully", "Record Register");
        },
        err => {console.log(err)}
      )
    }
  }

}
