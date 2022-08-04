import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  name: string = 'Tom'
  age: number = 30

  constructor() { }

  ngOnInit(): void {
  
  }
}
