import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  acno=''
  pswd=''
  amount=''

  acno1=''
  pswd1=''
  amount1=''

  //login udername
  user =''
  constructor(private ds:DataService) {
    this.user=this.ds.currentUser
   }

  ngOnInit(): void {
  }
// Deposit()

  Deposit(){
    var acno = this.acno
    var pswd = this.pswd
   var amount= this.amount

   const result = this.ds.Deposit(acno,pswd,amount)

   if(result){
    alert(`${amount} is creadited, New balance ${result}`)
   }


  }

// Withdraw()

Withdraw(){
  var acno = this.acno1
  var pswd = this.pswd1
  var amount = this.amount1
  const  result = this.ds.Withdraw(acno,pswd,amount)

  if(result){
    alert(`${amount} is Debited, New balance ${result}`)
    
  }
}
   

}
