import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
    './user-login.component.css'
  ]
})
export class UserLoginComponent implements OnInit {

  constructor(public service: UserService,
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    /*if(this.service.formData.userId==0)
      this.toastr.info('You do not have an account','Login failed');
    else*/
      this.login(form);
    
  }
  login(form:NgForm){
    /*this.service.login().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Logged in successfully','Login Page')
      },
      err => {console.log(err); }
    );*/
    this.router.navigate(['./home']);
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }

}
