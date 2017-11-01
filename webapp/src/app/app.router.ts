import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ContactComponent} from './contact/contact.component';

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'contact', component: ContactComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
