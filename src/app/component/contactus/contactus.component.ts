import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }
//   form = new FormGroup({
//   name : new FormControl('',[Validators.required, Validators.minLength(10)]),
//   email : new FormControl('',[Validators.required, Validators.email]),
//   subject : new FormControl('',[Validators.required]),
//   message : new FormControl('',[Validators.required])
// })

  ngOnInit(): void {
  }
  // get f(){
  //   return this.form.controls;
  // }
  // submit(){
  //   console.log(this.form.value)
  // }
}
