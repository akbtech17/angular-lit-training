import { Component } from '@angular/core';

// Component: Decorator

// Selector: Defines the identifie for the component
// templateUrl: for html
// styleUrls: styling file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// exporting the class 
export class AppComponent {
  title = 'demoangular';
}
