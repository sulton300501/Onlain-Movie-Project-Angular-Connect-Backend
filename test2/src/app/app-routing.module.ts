import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './Genres/index-genres/index-genres.component';
import { ActorindexActorComponent } from './Actor/index-actor/actorindex-actor.component';
import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { GenrescreateGenresComponent } from './Genres/genrescreate-genres/genrescreate-genres.component';
import { ActorcreateActorComponent } from './Actor/create-actor/actorcreate-actor.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { IndexTeatherComponent } from './Teather/index-teather/index-teather.component';
import { CreateTeatherComponent } from './Teather/create-teather/create-teather.component';
import { EditGenresComponent } from './Genres/edit-genres/edit-genres.component';
import { EditActorComponent } from './Actor/edit-actor/edit-actor.component';
import { EditMoviesComponent } from './Movies/edit-movies/edit-movies.component';
import { EditTeatherComponent } from './Teather/edit-teather/edit-teather.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"genres",component:IndexGenresComponent},
  {path:"genres/create",component:GenrescreateGenresComponent},
  {path:"genres/edit/:id",component:EditGenresComponent},

  {path:"actors",component:ActorindexActorComponent},
  {path:"actors/create",component:ActorcreateActorComponent},
  {path:"actors/edit/:id",component:EditActorComponent},


  {path:"movies",component:IndexMoviesComponent},
  {path:"movies/create",component:CreateMovieComponent},
  {path:"movies/edit/:id",component:EditMoviesComponent},

  {path:"movietheaters",component:IndexTeatherComponent},
  {path:"movietheaters/create",component:CreateTeatherComponent},
  {path:"movietheaters/edit/:id",component:EditTeatherComponent},
  

  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
