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
import {MatTooltipModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import {routes} from './app.router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ContactComponent} from './contact/contact.component';
import {EventComponent} from './home/event/event.component';
import {TitleComponent} from './home/title/title.component';
import {ArticleComponent} from './articles/article/article.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ContactComponent,
    EventComponent,
    ArticleComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    // LazyLoadImageModule,
    BrowserAnimationsModule,
    routes,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule,
    MatInputModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
