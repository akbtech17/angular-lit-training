import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css']
})
export class MovieaddComponent implements OnInit {
  movieData: Movie[] = [
    {id: 0, name:'Sultan', year:2000, rating:3},
    {id: 1, name:'DDLJ', year:1999, rating:4},
    {id: 2, name:'Mai Hoon Na', year:2009, rating:5},
    {id: 3, name:'LOC', year:2022, rating:2}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
