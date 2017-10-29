import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ContactComponent} from './contact/contact.component';

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
