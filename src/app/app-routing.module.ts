import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicusageComponent } from '../app/usages/basicusage/basicusage.component';
import { AngularpipesComponent} from '../app/usages/angularpipes/angularpipes.component';

const routes: Routes = [
  {path:'basicusage', component:BasicusageComponent},
  {path:'angularpipes',component:AngularpipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
