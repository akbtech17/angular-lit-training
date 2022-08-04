import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  weekdays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];
  age: number = 30
  EmpArr: Employee[] = [
    {id: 10, name: 'Anshul', salary:15000, dept:'IT'},
    {id: 11, name: 'Amit', salary:25000, dept:'HR'},
    {id: 12, name: 'Jitin', salary:35000, dept:'LIT'},
    {id: 13, name: 'Vibhor', salary:45000, dept:'ITP'},
    {id: 14, name: 'Aakrithi', salary:55000, dept:'ITM'},
    {id: 15, name: 'Bhavya', salary:65000, dept:'IMT'}
  ]
  GetTotal(): number {
    let total: number = 0
    for(var i=0; i<this.EmpArr.length; i++) {
      total += total+this.EmpArr[i].salary
    }
    return total
  }
  constructor() { }

  ngOnInit(): void {
  }

}
