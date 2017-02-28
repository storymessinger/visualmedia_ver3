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
                { path: 'all', component: MemberStudentComponent}
            ]
        }

    ])],
    exports: [RouterModule]
})

export class MainContentRoutingModule {}