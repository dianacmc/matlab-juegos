import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HanoitTowerComponent } from './hanoit-tower/hanoit-tower.component'
import { SenkuComponent } from './senku/senku.component';
import { MagicSquaresComponent } from './magic-squares/magic-squares.component';
import { BasicOperationsComponent } from './basic-operations/basic-operations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }, 
  {
    path: 'hanoit-tower',
    component: HanoitTowerComponent
  },
  {
    path: 'senku',
    component: SenkuComponent
  },
  {
    path: 'magic-squares',
    component: MagicSquaresComponent
  },
  {
    path: 'basic-operations',
    component: BasicOperationsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
