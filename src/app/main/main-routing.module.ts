import { ArchiveSeminarComponent } from './main-content/archive-seminar/archive-seminar.component';
import { ArchiveDownloadsComponent } from './main-content/archive-downloads/archive-downloads.component';
import { IssuesLifeComponent } from './main-content/issues-life/issues-life.component';
import { IssuesMediaComponent } from './main-content/issues-media/issues-media.component';
import { IssuesNewsComponent } from './main-content/issues-news/issues-news.component';
import { ResearchThesisComponent } from './main-content/research-thesis/research-thesis.component';
import { ResearchPublicateIndividualComponent } from './main-content/research-publicate-individual/research-publicate-individual.component';
import { ResearchPublicateKrComponent } from './main-content/research-publicate-kr/research-publicate-kr.component';
import { ResearchPublicateComponent } from './main-content/research-publicate/research-publicate.component';
import { ResearchProjectsIndividualComponent } from './main-content/research-projects-individual/research-projects-individual.component';
import { ResearchProjectsComponent } from './main-content/research-projects/research-projects.component';
import { ResearchAreaIndividualComponent } from './main-content/research-area-individual/research-area-individual.component';
import { ResearchAreaComponent } from './main-content/research-area/research-area.component';
import { MemberStudentIndividualComponent } from './main-content/member-student-individual/member-student-individual.component';
import { MemberStudentComponent } from './main-content/member-student/member-student.component';
import { AboutPartnersComponent } from './main-content/about-partners/about-partners.component';
import { AboutAdmissionComponent } from './main-content/about-admission/about-admission.component';
import { AboutInfoComponent } from './main-content/about-info/about-info.component';


import { CONTENT_ROUTES } from './content/content.routes';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [RouterModule.forChild([
        { 
            path: 'main',
            component: MainComponent,
            data: {
                breadcrumb: "Main"
            },
            children: [
                {   path: 'info', 
                    component: AboutInfoComponent,
                    data: { breadcrumb: "About us" }
                },
                {   path: 'admission', 
                    component: AboutAdmissionComponent,
                    data: { breadcrumb: "Admission" }
                },
                {   path: 'partners', 
                    component: AboutPartnersComponent,
                    data: { breadcrumb: "Partners" }
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

export class MainRoutingModule {}