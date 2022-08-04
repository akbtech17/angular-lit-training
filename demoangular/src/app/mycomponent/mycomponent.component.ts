import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  name: string = 'Tom'
  age: number = 30
  fno: number = 70
  sno: number = 30
  total: number = 0

  add(): number {
    this.total = this.fno + this.sno
    return this.total
  }

  constructor() { }

  ngOnInit(): void {
  
  }
}
