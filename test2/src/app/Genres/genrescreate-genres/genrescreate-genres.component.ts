import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreteGenreDTO } from '../Genres.model';





@Component({
  selector: 'app-genrescreate-genres',
  templateUrl: './genrescreate-genres.component.html',
  styleUrl: './genrescreate-genres.component.css'
})
export class GenrescreateGenresComponent implements OnInit {

constructor(private router:Router){}

SaveChanges(createGenreDTO : CreteGenreDTO){
console.log(createGenreDTO)
this.router.navigate(['/genres'])
  }

  ngOnInit(): void {
    
  }


}
