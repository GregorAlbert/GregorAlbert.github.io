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
import {MatExpansionModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';

import {routes} from './app.router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArticleListComponent} from './articles/article-list/article-list.component';
import {ContactComponent} from './contact/contact.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AboutComponent} from './about/about.component';
import {PlacesComponent} from './places/places.component';
import {PlansComponent} from './plans/plans.component';
import {SponsorsComponent} from './sponsors/sponsors.component';

import {AgmCoreModule} from '@agm/core';
import {ArticleDetailComponent} from './articles/article-detail/article-detail.component';
import {ArticleGalleryComponent} from './articles/article-gallery/article-gallery.component';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';
import {PlaceDetailComponent} from './places/place-detail/place-detail.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticleListComponent,
    AboutComponent,
    PlacesComponent,
    PlansComponent,
    SponsorsComponent,
    ArticleDetailComponent,
    ArticleGalleryComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatExpansionModule,
    MatGridListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
