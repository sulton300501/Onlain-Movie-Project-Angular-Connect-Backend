import { Injectable } from '@angular/core';
import { GenresDTO } from './Genres.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  GetAll():Observable<GenresDTO[]> {
    console.log(`${this.baseUrl}/Genres`)
    return this.httpClient.get<GenresDTO[]>(`${this.baseUrl}/Genres`);
  }

  






}
