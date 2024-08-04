import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreteGenreDTO } from '../Genres.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrl: './edit-genres.component.css'
})
export class EditGenresComponent implements OnInit {


model:CreteGenreDTO={Name:"Drama"}
  

  constructor(private activitedRoute:ActivatedRoute){}

  SaveChanges(createGenreDTO:CreteGenreDTO){

  }


  ngOnInit(): void {
    
  }

}
