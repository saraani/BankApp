import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // property / variable


  aim = 'your perfect banking partner'

  account = 'Enter tour account here'

  acno = ''
  pswd = ''
  

  // constructor -
  constructor(private router: Router, private ds:DataService) { }


  // ngOnInit - componentil autherize or testing cheyyannam  before anythng happends
  //               life cycle Hook of angular
  ngOnInit(): void {
  }

  // user defined functions
  //user defined functions class nte eettavum thazheye define cheyyavu
  //define user definerd functions at the end of class

  //acnoChange() (these are used when event binding argument is $event)
  //  acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
  //  }
  //  //pswdChange()
  //  pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);

  //  }

  //  //Login()

  Login() {
    var acno = this.acno
    var pswd = this.pswd

    const result = this.ds.Login(acno, pswd)
    if (result) {
      alert('Login successful')
      this.router.navigateByUrl('Dashboard')
    }
  }
}



  // Login() - with 2 arguments (using template reference variable)

  //  Login(a:any,p:any){
  //   var acno = a.value
  //   var pswd = p.value
  //   let userDetails = this.userDetails


  //   if(acno in userDetails){
  //   if(pswd==userDetails[acno].password){
  //     alert('login success')
  //   }
  //   else{
  //     alert('incorrect password')
  //   }
  //   }
  //   else{
  //     alert('user doesnot exist')
  //    }
  //   }

