import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit{

constructor(private router:Router){}

SaveChanges(){
  this.router.navigate(['/movietheaters'])
}

ngOnInit(): void {
  
}

}
