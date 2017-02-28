import { ArchiveSeminarComponent } from './archive-seminar/archive-seminar.component';
import { ArchiveDownloadsComponent } from './archive-downloads/archive-downloads.component';
import { IssuesLifeComponent } from './issues-life/issues-life.component';
import { IssuesMediaComponent } from './issues-media/issues-media.component';
import { IssuesNewsComponent } from './issues-news/issues-news.component';
import { ResearchThesisComponent } from './research-thesis/research-thesis.component';
import { ResearchPublicateKrComponent } from './research-publicate-kr/research-publicate-kr.component';
import { ResearchPublicateComponent } from './research-publicate/research-publicate.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { ResearchAreaComponent } from './research-area/research-area.component';
import { MemberProfessorComponent } from './member-professor/member-professor.component';
import { MemberStudentComponent } from './member-student/member-student.component';
import { AboutAdmissionComponent } from './about-admission/about-admission.component';
import { MainContentComponent } from './main-content.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [RouterModule.forChild([
        { 
            path: '',
            component: MainContentComponent,
            children: [
                { path: 'info', component: AboutInfoComponent },
                { path: 'admission', component: AboutAdmissionComponent},
                { path: 'all', component: MemberStudentComponent},
                { path: 'head', component: MemberProfessorComponent },
                { path: 'area', component: ResearchAreaComponent},
                { path: 'projects', component: ResearchProjectsComponent},
                { path: 'publicate', component: ResearchPublicateComponent},
                { path: 'publicate_kr', component: ResearchPublicateKrComponent},
                { path: 'thesis', component: ResearchThesisComponent},
                { path: 'news', component: IssuesNewsComponent},
                { path: 'media', component: IssuesMediaComponent},
                { path: 'life', component: IssuesLifeComponent},
                { path: 'downloads', component: ArchiveDownloadsComponent},
                { path: 'seminar', component: ArchiveSeminarComponent}
            ]
        }

    ])],
    exports: [RouterModule]
})

export class MainContentRoutingModule {}