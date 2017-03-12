import { MemberStudentIndividualComponent } from './member-student-individual/member-student-individual.component';
import { ResearchAreaIndividualComponent } from './research-area-individual/research-area-individual.component';
import { ResearchProjectsIndividualComponent } from './research-projects-individual/research-projects-individual.component';
import { ResearchPublicateIndividualComponent } from './research-publicate-individual/research-publicate-individual.component';
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
                {   path: 'info', 
                    component: AboutInfoComponent,
                    data: { breadcrumb: "About us" }
                },
                {   path: 'admission', 
                    component: AboutAdmissionComponent,
                    data: { breadcrumb: "Admission" }
                },
                {   path: 'all', 
                    component: MemberStudentComponent,
                    data: { breadcrumb: "Members" }
                },
                {   path: 'all/:id', 
                    component: MemberStudentIndividualComponent,
                    data: { breadcrumb: "Members (individual)" }
                },
                {   path: 'area', 
                    component: ResearchAreaComponent, 
                    data: { breadcrumb: "Research Area" }
                },
                {   path: 'area/:id', 
                    component: ResearchAreaIndividualComponent, 
                    data: { breadcrumb: "Research Area (individual)" }
                },
                {   path: 'projects', 
                    component: ResearchProjectsComponent, 
                    data: { breadcrumb: "Projects" }
                },
                {   path: 'projects/:id', 
                    component: ResearchProjectsIndividualComponent, 
                    data: { breadcrumb: "Projects (individual)" }
                },
                {   path: 'publicate', 
                    component: ResearchPublicateComponent, 
                    data: { breadcrumb: "Publications" }
                },
                {   path: 'publicate_kr', 
                    component: ResearchPublicateKrComponent, 
                    data: { breadcrumb: "Domestic Publications" }
                },
                {   path: 'publicate/:id', 
                    component: ResearchPublicateIndividualComponent, 
                    data: { breadcrumb: "Publications (individual)" }
                },
                {   path: 'thesis', 
                    component: ResearchThesisComponent, 
                    data: { breadcrumb: "Thesis" }
                },
                {   path: 'news', 
                    component: IssuesNewsComponent,
                    data: { breadcrumb: "Our News" }
                },
                {   path: 'media', 
                    component: IssuesMediaComponent, 
                    data: { breadcrumb: "In Media" }
                },
                {   path: 'life', 
                    component: IssuesLifeComponent, 
                    data: { breadcrumb: "Our Daily Life" }
                },
                {   path: 'downloads/:id', 
                    component: ArchiveDownloadsComponent, 
                    data: { breadcrumb: "Downloads" }
                },
                {   path: 'downloads', 
                    component: ArchiveDownloadsComponent, 
                    data: { breadcrumb: "Downloads" }
                },
                {   path: 'seminar/:id', 
                    component: ArchiveSeminarComponent, 
                    data: { breadcrumb: "Seminar" }
                },
                {   path: 'seminar', 
                    component: ArchiveSeminarComponent, 
                    data: { breadcrumb: "Seminar" },
                    pathMatch: 'full'
                }

            ]
        }

    ])],
    exports: [RouterModule]
})

export class MainContentRoutingModule {}