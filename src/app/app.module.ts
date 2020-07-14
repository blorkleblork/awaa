import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SingleProjectComponent } from './projects-list/single-project/single-project.component';
import { ProjectFormComponent } from './projects-list/project-form/project-form.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from './auth.service';
import { ProjectService } from './project.service';
import { AuthGuardService } from './auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './team/team.component';
import { PublicationsComponent } from './publications/publications.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CulturalComponent } from './projects-list/cultural/cultural.component';
import { EducationalComponent } from './projects-list/educational/educational.component';
import { IndustrialComponent } from './projects-list/industrial/industrial.component';
import { ResidentialComponent } from './projects-list/residential/residential.component';
import { CommercialComponent } from './projects-list/commercial/commercial.component';
import { OfficeComponent } from './projects-list/office/office.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProjectsListComponent,
    SingleProjectComponent,
    ProjectFormComponent,
    AuthComponent,
    SigninComponent,
    AboutUsComponent,
    TeamComponent,
    PublicationsComponent,
    CarouselComponent,
    CulturalComponent,
    EducationalComponent,
    IndustrialComponent,
    ResidentialComponent,
    CommercialComponent,
    OfficeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ProjectService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
