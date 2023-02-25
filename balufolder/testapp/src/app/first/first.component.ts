import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';


export interface payload{
 title:string;
  body:string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title:any;
  body:any;
  mytitle:any;

firstField: any;
secondField: any;
errorMessage: any;
 

  userList = [];
  

  // public payload: payload;
  public arrdata:any;
  date = new Date();
  //  public xyz :string;

  lform = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
 
 loginForm:any;


  // userdata={
  //   useremail:'',
  //   password:''
  // }

  constructor(public elem:GetdataService, private routing:Router) { 

  }

  onsubmit(item:any){
    // this.userList.push(item.value)
    console.log(item);
  }

  loginworks(){
    // this.lform;
    // console.log(this.lform);
    const response = this.elem.loginformser(this.lform.value);
    if(response == true){
      this.routing.navigate(['home']);
    }

  }

  ngOnInit(): void {
    this.apibind();
    this.postapi();

    this.mytitle = localStorage.getItem("token");
  }

 

  apibind(){
    this.elem.getdataapi().subscribe((resp)=>{
      // console.log(resp);
      this.arrdata = resp;
    })
  }

  // onclick(item){
  //   this.userList.push();
  //   addme.value = '';

  // }

  // onsubmit(item:any){
  //   this.userList.push(item.value);
  //   item.value='';
  // }

  // title:"time",body:"3-1-2023"

  postapi(){
    var date= new Date();
    this.elem.postdatapi({title:"time",body:date.toString()}).subscribe((respon)=>{
      console.log(respon);
      // this.xyz = respon;
    }) 
  }

  add(){

    this.mytitle = "This is for my reference of localstorage";
    
    localStorage.setItem("token",this.mytitle);
    
  }

  validateSecondField() {
    if (this.firstField >= this.secondField) {
    this.errorMessage = "Second Field value should be greater than First Field";
    } else {
    this.errorMessage = "";
    }
    }






}
