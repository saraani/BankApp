import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
   
  //register Model (reactiveFOrms)

  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder,private ds:DataService,private router : Router) { }

  ngOnInit(): void {
  }

  Register(){
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

    const result = this.ds.Register(acno,uname,pswd)
    if(result){
      alert('Successfully Registered!!!!')
      this.router.navigateByUrl('')
    }

    else{
      alert('User Already Exist...Please Log In ...')
      this.router.navigateByUrl('')
    }

  }

}
