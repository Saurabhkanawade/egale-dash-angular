import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideBarTogglerForMe: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarTogglerForMe.emit() 
    console.log('emited')
  }

}