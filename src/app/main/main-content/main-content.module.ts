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
import { MemberProfessorComponent } from './member-professor/member-professor.component';
import { ResearchAreaComponent } from './research-area/research-area.component';
import { ResearchPublicateComponent } from './research-publicate/research-publicate.component';
import { ResearchPublicateKrComponent } from './research-publicate-kr/research-publicate-kr.component';
import { ResearchThesisComponent } from './research-thesis/research-thesis.component';
import { IssuesMediaComponent } from './issues-media/issues-media.component';
import { IssuesLifeComponent } from './issues-life/issues-life.component';
import { ArchiveDownloadsComponent } from './archive-downloads/archive-downloads.component';
import { ArchiveSeminarComponent } from './archive-seminar/archive-seminar.component';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery/app/angular2imagegallery.module'

@NgModule({
  imports: [
    CommonModule,
    MainContentRoutingModule,
    Angular2ImageGalleryModule,
    NgbModule
  ],
  declarations: [MainContentComponent, AboutInfoComponent, AboutAdmissionComponent, MemberStudentComponent, IssuesNewsComponent, ResearchProjectsComponent, MemberProfessorComponent, ResearchAreaComponent, ResearchPublicateComponent, ResearchPublicateKrComponent, ResearchThesisComponent, IssuesMediaComponent, IssuesLifeComponent, ArchiveDownloadsComponent, ArchiveSeminarComponent],
  providers: [MemberService, NewsService, MediaService]
})
export class MainContentModule { }
