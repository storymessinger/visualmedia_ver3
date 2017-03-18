import { ScrollAbleService } from './shared/scroll-able.service';
import { KeysPipe } from './shared/keys-pipe';
import { PartnersService } from './shared/partners.service';
import { PublicationsService } from './shared/publications.service';
import { PostsService } from './shared/posts.service';
import { ProjectsService } from './shared/projects.service';
import { SeminarService } from './shared/seminars.service';
import { DownloadService } from './shared/downloads.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaService } from './shared/media.service';
import { NewsService } from './shared/news.service';
import { MemberService } from './shared/member.service';
import { AboutInfoComponent } from './about-info/about-info.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { AboutAdmissionComponent } from './about-admission/about-admission.component';
import { MemberStudentComponent } from './member-student/member-student.component';
import { IssuesNewsComponent } from './issues-news/issues-news.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { ResearchAreaComponent } from './research-area/research-area.component';
import { ResearchPublicateComponent } from './research-publicate/research-publicate.component';
import { ResearchPublicateKrComponent } from './research-publicate-kr/research-publicate-kr.component';
import { ResearchThesisComponent } from './research-thesis/research-thesis.component';
import { IssuesMediaComponent } from './issues-media/issues-media.component';
import { IssuesLifeComponent } from './issues-life/issues-life.component';
import { ArchiveDownloadsComponent } from './archive-downloads/archive-downloads.component';
import { ArchiveSeminarComponent } from './archive-seminar/archive-seminar.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ResearchProjectsIndividualComponent } from './research-projects-individual/research-projects-individual.component';
import { ResearchPublicateIndividualComponent } from './research-publicate-individual/research-publicate-individual.component';
import { ResearchAreaIndividualComponent } from './research-area-individual/research-area-individual.component';
import { MemberStudentIndividualComponent } from './member-student-individual/member-student-individual.component';
import { AboutPartnersComponent } from './about-partners/about-partners.component';


@NgModule({
  imports: [
    CommonModule,
    MainContentRoutingModule,
    NgbModule,
    Ng2PageScrollModule.forRoot(),
  ],
  declarations: [
    MainContentComponent, 
    AboutInfoComponent, 
    AboutAdmissionComponent, 
    MemberStudentComponent, 
    IssuesNewsComponent, 
    ResearchProjectsComponent, 
    ResearchAreaComponent, 
    ResearchPublicateComponent, 
    ResearchPublicateKrComponent, 
    ResearchThesisComponent, 
    IssuesMediaComponent, 
    IssuesLifeComponent, 
    ArchiveDownloadsComponent, 
    ArchiveSeminarComponent, 
    ResearchProjectsIndividualComponent, 
    ResearchPublicateIndividualComponent, 
    ResearchAreaIndividualComponent, 
    MemberStudentIndividualComponent, 
    AboutPartnersComponent,
    KeysPipe
    ],
  providers: [MemberService, NewsService, MediaService, DownloadService, SeminarService, ProjectsService, PostsService, PublicationsService, PartnersService, ScrollAbleService]
})
export class MainContentModule { }
