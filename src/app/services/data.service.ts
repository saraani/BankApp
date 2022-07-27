import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //loging usernae
       currentUser:any
       //login acno
       currentAcno:any
  //data  base  - bank
  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 5000,transaction:[]},
    1001: { acno: 1001, username: 'Liyo', password: 1001, balance: 4000 ,transaction:[]},
    1002: { acno: 1002, username: 'MaxWell', password: 1002, balance: 6000,transaction:[] }
  }

  constructor() { }

  //Register()

  Register(acno: any, username: any, password: any) {

    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = {
        acno,
        username,    // key : value pair aahnn,but the given variable name and userDetails object key name are the same ,so we can give like this . 
        password,     // if the names are deffrent you should give like  " key : value "
        balance: 0,
        transaction:[]
      }
      console.log(userDetails);
      return true

    }

  }



  //Login()

  Login(acno: any, pswd: any) {

    let userDetails = this.userDetails


    if (acno in userDetails) {
      if (pswd == userDetails[acno].password) {
        this.currentUser=userDetails[acno].username
        this.currentAcno=acno
        return true
      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user doesnot exist')
      return false
    }
  }

  // deposit

  Deposit(acno: any, pswd: any, amt: any) {

    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in userDetails) {
      if (pswd == userDetails[acno].password) {
        userDetails[acno].balance += amount
        userDetails[acno].transaction.push({
          type:'Credit',
          amount: amount
        })
        
        console.log(userDetails);
        return userDetails[acno].balance
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('user dosenot exist')
      return false
    }
  }


  //Withdraw()

  Withdraw(acno:any,pswd:any,amt:any){
    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in userDetails) {
      if (pswd == userDetails[acno].password) {
        if(userDetails[acno].balance > amount){
          userDetails[acno].balance -= amount
          userDetails[acno].transaction.push({
            type:'Debit',
            amount: amount
          })
          console.log(userDetails);
          
          return userDetails[acno].balance
        }

        else{
          alert('Insufficient balance')
        }
        
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('user dosenot exist')
      return false
    }

  }

  //transaction

  getTransaction(acno:any){
    return this.userDetails[acno].transaction
  }



}
