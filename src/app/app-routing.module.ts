import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { DetailsComponent } from './component/details/details.component';
import { LoginComponent } from './component/login/login.component';
import { PopularcrComponent } from './component/popularcr/popularcr.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { SectionComponent } from './component/section/section.component';





const routes: Routes = [
  {
    path:'',
    component:SectionComponent
  },
  {
    path:'popular_courses',
    component:PopularcrComponent
  },
  {
    path:'registration_now',
    component:RegistrationComponent
  },
  {
    path:'about_us',
    component:AboutComponent
  },
  {
    path:'contact_us',
    component:ContactusComponent
  },
  {
    path:'courses_details',
    component:DetailsComponent
  },
  {
    path:'login_now',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
