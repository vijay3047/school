import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SectionComponent } from './component/section/section.component';
import { DepartmentComponent } from './component/department/department.component';
import { PopularcrComponent } from './component/popularcr/popularcr.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FooterComponent } from './component/footer/footer.component';
import { EventsComponent } from './component/events/events.component';
import { AboutComponent } from './component/about/about.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { DetailsComponent } from './component/details/details.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionComponent,
    DepartmentComponent,
    PopularcrComponent,
    RegistrationComponent,
    FooterComponent,
    EventsComponent,
    AboutComponent,
    ContactusComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
