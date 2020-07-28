import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SingleProjectComponent } from './projects-list/single-project/single-project.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProjectFormComponent } from './projects-list/project-form/project-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { PublicationsComponent } from './publications/publications.component';
import { CommercialComponent } from './projects-list/commercial/commercial.component';
import { CulturalComponent } from './projects-list/cultural/cultural.component';
import { EducationalComponent } from './projects-list/educational/educational.component';
import { IndustrialComponent } from './projects-list/industrial/industrial.component';
import { OfficeComponent } from './projects-list/office/office.component';
import { ResidentialComponent } from './projects-list/residential/residential.component';
import { VideoComponent } from './video/video.component';
import { VideoWideComponent } from './video/video-wide/video-wide.component';
import { VideoFullComponent } from './video/video-full/video-full.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'projects', component: ProjectsListComponent},
  {path: 'project/new', component: ProjectFormComponent},
  {path: 'projects/view', component: SingleProjectComponent},
  {path: 'projects/commercial', component: CommercialComponent},
  {path: 'projects/cultural', component: CulturalComponent},
  {path: 'projects/educational', component: EducationalComponent},
  {path: 'projects/industrial', component: IndustrialComponent},
  {path: 'projects/office', component: OfficeComponent},
  {path: 'projects/residential', component: ResidentialComponent},
  {path: 'video', component: VideoComponent},
  {path: 'video/wide', component: VideoWideComponent},
  {path: 'video/full', component: VideoFullComponent},
  {path: 'contact', component: AboutUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: 'admin', component: SigninComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '**', redirectTo: 'homepage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
