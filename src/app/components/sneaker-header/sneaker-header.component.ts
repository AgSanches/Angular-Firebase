import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sneaker-header',
  templateUrl: './sneaker-header.component.html',
  styleUrls: ['./sneaker-header.component.css']
})
export class SneakerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    $("app-sneaker-side-menu").css({"left" : "0"});
  }
}