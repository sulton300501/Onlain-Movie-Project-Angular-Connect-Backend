import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teather',
  templateUrl: './create-teather.component.html',
  styleUrl: './create-teather.component.css'
})
export class CreateTeatherComponent implements OnInit{

  SaveChanges(){
    this.router.navigate(['movietheaters'])
  }

  constructor(private router:Router){}
   

ngOnInit(): void {
  
}


}
