import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';

import {routes} from './app.router';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ContactComponent} from './contact/contact.component';
import {ToggleFullscreenDirective} from './navigation/full-screen.directive';
import {EventComponent} from './home/event/event.component';
import {TitleComponent} from './home/title/title.component';
import {ArticleComponent} from './articles/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ArticlesComponent,
    ContactComponent,
    ToggleFullscreenDirective,
    EventComponent,
    ArticleComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
