import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { IndexGenresComponent } from './Genres/index-genres/index-genres.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { GenrescreateGenresComponent } from './Genres/genrescreate-genres/genrescreate-genres.component';
import { ActorindexActorComponent } from './Actor/index-actor/actorindex-actor.component';
import { ActorcreateActorComponent } from './Actor/create-actor/actorcreate-actor.component';
import { IndexTeatherComponent } from './Teather/index-teather/index-teather.component';
import { CreateTeatherComponent } from './Teather/create-teather/create-teather.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';

import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { HomeComponent } from './home/home.component';
import { EditGenresComponent } from './Genres/edit-genres/edit-genres.component';
import { EditActorComponent } from './Actor/edit-actor/edit-actor.component';
import { EditMoviesComponent } from './Movies/edit-movies/edit-movies.component';
import { EditTeatherComponent } from './Teather/edit-teather/edit-teather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenreFormComponent } from './Genres/genre-form/genre-form.component';
import { SearchMovieComponent } from './Genres/search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexGenresComponent,
    MenuComponent,
    GenrescreateGenresComponent,
   
    
        ActorindexActorComponent,
                  ActorcreateActorComponent,
                  IndexTeatherComponent,
                  CreateTeatherComponent,
                  CreateMovieComponent,
                
                  IndexMoviesComponent,
                  HomeComponent,
                  EditGenresComponent,
                  EditActorComponent,
                  EditMoviesComponent,
                  EditTeatherComponent,
                  GenreFormComponent,
                  SearchMovieComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
