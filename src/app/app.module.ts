import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Modules/header/header.component';
import { CatalogComponent } from './Modules/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Modules/login/login.component';
import { RegistrationComponent } from './Modules/registration/registration.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyGamesComponent } from './Modules/my-games/my-games.component';
import { SliderGamesComponent } from './Modules/Helpers/slider-games/slider-games.component';
import { SearchComponent } from './Modules/search/search.component';
import { GenreComponent } from './Modules/genre/genre.component';
import { CategoriesComponent } from './Modules/categories/categories.component';
import { GameComponent } from './Modules/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    LoginComponent,
    RegistrationComponent,
    MyGamesComponent,
    SliderGamesComponent,
    SearchComponent,
    GenreComponent,
    CategoriesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
