import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreteGenreDTO } from '../Genres.model';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrl: './genre-form.component.css'
})
export class GenreFormComponent implements OnInit{


  

form:FormGroup
@Input()
modelValue:CreteGenreDTO;

@Output()
onSaveChanges : EventEmitter<CreteGenreDTO> = new EventEmitter<CreteGenreDTO>();


SaveChanges(){ 

  this.onSaveChanges.emit(this.form.value)
}



constructor(private router:Router , private formBuilder:FormBuilder){

}

GetErrorMessage(){
  const field = this.form.get('name')
  if(field.hasError('required') ){
    return 'Name field is required'
  }
  if(field.hasError('minlength')){
    return 'Name field Minimum len is 2'
  }
  return ""
}






ngOnInit(): void {
this.form = this.formBuilder.group({
  name:["",{
    validators:[Validators.required,Validators.minLength(2)]
  }]
})


if(this.modelValue!==undefined){
  this.form.patchValue(this.modelValue)
}




}



}
