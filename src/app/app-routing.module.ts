import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-house' },
  { path: 'houses-list', component: HousesListComponent },
  { path: 'add-house', component: AddHouseComponent },
  { path: 'edit-house/:id', component: HouseDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }