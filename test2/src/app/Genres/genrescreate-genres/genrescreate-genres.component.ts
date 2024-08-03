import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genrescreate-genres',
  templateUrl: './genrescreate-genres.component.html',
  styleUrl: './genrescreate-genres.component.css'
})
export class GenrescreateGenresComponent implements OnInit {



  SaveChanges(){
    this.router.navigate(['/genres'])
  }



  constructor(private router:Router){

  }

ngOnInit(): void {
  
}


}
