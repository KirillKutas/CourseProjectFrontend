import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './Modules/catalog/catalog.component';
import {LoginComponent} from './Modules/login/login.component';
import {RegistrationComponent} from './Modules/registration/registration.component';
import {MyGamesComponent} from './Modules/my-games/my-games.component';
import {SearchComponent} from './Modules/search/search.component';
import {GenreComponent} from './Modules/genre/genre.component';
import {CategoriesComponent} from './Modules/categories/categories.component';
import {GameComponent} from './Modules/game/game.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'myGames', component: MyGamesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'genre/:value', component: GenreComponent},
  {path: 'category/:value', component: CategoriesComponent},
  {path: 'game/:id', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
