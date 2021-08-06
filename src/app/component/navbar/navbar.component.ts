import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMe:boolean=false
  constructor() { }
  ngOnInit(): void {
  }
  show(){
    this.showMe=!this.showMe
  }
  hide(){
    this.showMe=!this.showMe
  }
}
