import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrl: './edit-movies.component.css'
})
export class EditMoviesComponent implements OnInit {



  

  constructor(private activitedRoute:ActivatedRoute){}



  ngOnInit(): void {
    
  }

}
