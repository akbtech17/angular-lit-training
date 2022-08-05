import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

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
  city: string = "mumbai"
  mstatus: boolean = true
  myname: string = ''

  Show(): void {
    alert('Name is '+this.name+' and age is '+this.age);
  }

  add(): number {
    this.total = this.fno + this.sno
    return this.total
  }

  // normally services are injected in the constructor of the Comonents
  constructor(private movieservice: MovieserviceService) {
    // as soon as Component is created, 
    // object of service is created
    this.myname = this.movieservice.Display("Anshul");
    // console.log(this.myname);
   }

  ngOnInit(): void {
  
  }
}
