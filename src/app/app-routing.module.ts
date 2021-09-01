import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { HomeNewComponent } from './components/home-new/home-new.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home' },
  {path:'home', component: HomeComponent},
  {path: 'home/:idCasa', component: HomeDetailsComponent},
  {path: '/new', component: HomeNewComponent},
  {path: '**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
