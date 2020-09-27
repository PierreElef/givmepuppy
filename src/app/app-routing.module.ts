import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDogComponent } from './components/search-dog/search-dog.component';
import { FindDogComponent } from './components/find-dog/find-dog.component';


const routes: Routes = [
  {
    path: '',
    component: SearchDogComponent
  },
  {
    path: 'breeds',
    component: SearchDogComponent
  },
  {
    path: 'breeds/:breed',
    component: FindDogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
