import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieContainerComponent } from './components/container/movie-container/movie-container.component';
import { SearchResultsComponent } from './components/container/search-results/search-results.component';
import { ViewAllResultsComponent } from './components/container/view-all-results/view-all-results.component';


const routes: Routes = [
  {
    path: '',
    component: MovieContainerComponent
  },
  {
    path: ':searchText',
    component: SearchResultsComponent
  },
  {
    path: 'view-all/:language',
    component: ViewAllResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
