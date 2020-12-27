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
import { SpecialOffersSliderComponent } from './Modules/Helpers/special-offers-slider/special-offers-slider.component';
import { CatalogContentComponent } from './Modules/Helpers/catalog-content/catalog-content.component';
import { CatalogTabsComponent } from './Modules/Helpers/catalog-tabs/catalog-tabs.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { AccountComponent } from './Modules/account/account.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ModalDepositAccountComponent } from './Modules/Helpers/modal-deposit-account/modal-deposit-account.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ModalChangePasswordComponent } from './Modules/Helpers/modal-change-password/modal-change-password.component';
import { AddGameComponent } from './Modules/add-game/add-game.component';
import { ManageGameComponent } from './Modules/manage-game/manage-game.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
    GameComponent,
    SpecialOffersSliderComponent,
    CatalogContentComponent,
    CatalogTabsComponent,
    AccountComponent,
    ModalDepositAccountComponent,
    ModalChangePasswordComponent,
    AddGameComponent,
    ManageGameComponent,
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
    FormsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
