import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {PlansComponent} from './plans/plans.component';
import {PlacesComponent} from './places/places.component';
import {ArticleListComponent} from './articles/article-list/article-list.component';
import {ArticleDetailComponent} from './articles/article-detail/article-detail.component';
import {ArticleGalleryComponent} from './articles/article-gallery/article-gallery.component';
import {PlaceDetailComponent} from './places/place-detail/place-detail.component';

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'article/:id', component: ArticleDetailComponent},
  {path: 'gallery/:id', component: ArticleGalleryComponent},
  {path: 'places/:id', component: PlaceDetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
