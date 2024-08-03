import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actorcreate-actor',
  templateUrl: './actorcreate-actor.component.html',
  styleUrl: './actorcreate-actor.component.css'
})
export class ActorcreateActorComponent implements OnInit {


  SaveChanges(){
    this.router.navigate(['/actors'])
  }

  constructor(private router:Router){}




  ngOnInit(): void {
    
  }
}
