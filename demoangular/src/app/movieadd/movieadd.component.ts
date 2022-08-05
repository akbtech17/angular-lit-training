import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css']
})
export class MovieaddComponent implements OnInit {
  movieData: Movie = {id: 0, name:'', year:0, rating:0}

  SaveData(data: Movie) {
    this.movieData = data;
    console.log(this.movieData);
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
