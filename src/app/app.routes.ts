import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobitem-jobs/jobitem-jobs.component';
import { JobitemDetailsComponent } from './components/jobitem-details/jobitem-details.component'; 
import { JobitemFavoritesComponent } from './components/jobitem-favorites/jobitem-favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent, pathMatch: 'full' },
  {
    path: 'favorites',
    component: JobitemFavoritesComponent ,
    pathMatch: 'full',
  },
  {
    path: 'jobs/:jobId',
    component: JobitemDetailsComponent,
    pathMatch: 'full',
  },
];
