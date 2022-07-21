import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


      // property / variable


      aim ='your perfect banking partner'

     account =  'Enter tour account here' 

     acno=''
     pswd=''






      //data  base  - bank
      userDetails:any = {
        1000:{acno:1000,username:'neer',password:1000,balance:5000},
        1001:{acno:1001,username:'neer',password:1001,balance:4000},
        1002:{acno:1002,username:'neer',password:1002,balance:6000}
      }

      // constructor -
  constructor() { }


  // ngOnInit - componentil autherize or testing cheyyannam  before anythng happends
  //               life cycle Hook of angular
  ngOnInit(): void {
  }

     // user defined functions
     //user defined functions class nte eettavum thazheye define cheyyavu
     //define user definerd functions at the end of class

     //acnoChange()
     acnoChange(event:any){
      this.acno=event.target.value
      console.log(this.acno);
      

     }
     //pswdChange()
     pswdChange(event:any){
      this.pswd=event.target.value
      console.log(this.pswd);
      
     }

    //  //Login()

    //  Login(){
    //   var acno = this.acno
    //   var pswd = this.pswd
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



   // Login() - with 2 arguments (using template reference variable)

     Login(a:any,p:any){
      var acno = a.value
      var pswd = p.value
      let userDetails = this.userDetails


      if(acno in userDetails){
      if(pswd==userDetails[acno].password){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
      }
      else{
        alert('user doesnot exist')
       }
      }

}
