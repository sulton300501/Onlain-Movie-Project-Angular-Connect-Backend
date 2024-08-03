import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres-genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'] // To'g'ri yozilishi
})
export class IndexGenresComponent implements OnInit {

  constructor(private genreService: GenresService) {}

 ngOnInit(): void {
    this.genreService.GetAll().subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    });
  }
}
