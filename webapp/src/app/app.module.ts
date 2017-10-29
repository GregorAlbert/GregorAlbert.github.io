import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routes} from './app.router';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';

import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {ArticleComponent} from './article/article.component';
import {ContactComponent} from './contact/contact.component';
import {ToggleFullscreenDirective } from './navigation/full-screen.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ArticleComponent,
    ContactComponent,
    ToggleFullscreenDirective
  ],
  imports: [
    BrowserModule,
    routes,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
