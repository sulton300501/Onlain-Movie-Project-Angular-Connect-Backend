import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrl: './edit-genres.component.css'
})
export class EditGenresComponent implements OnInit {



  

  constructor(private activitedRoute:ActivatedRoute){}



  ngOnInit(): void {
    
  }

}