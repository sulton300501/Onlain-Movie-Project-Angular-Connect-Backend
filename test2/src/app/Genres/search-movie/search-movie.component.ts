import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent implements OnInit {


searchForm:FormGroup


constructor(private formBuilder:FormBuilder){}
genres=[{id:0 , Name:"Drama"}, {id:1 ,Name:"action"}]

ngOnInit(): void {
  this.searchForm=this.formBuilder.group({
  Name:"",
  genreId:0,

  })
}

}
