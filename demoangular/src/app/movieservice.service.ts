import { Injectable } from '@angular/core';

// injectable - means this class can only be injected
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  Display(name: string): string {
    return 'Hello '+name
  }
  constructor() { }
}
