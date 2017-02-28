import { MemberService } from './shared/member.service';
import { AboutInfoComponent } from './about-info/about-info.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { AboutAdmissionComponent } from './about-admission/about-admission.component';
import { MemberStudentComponent } from './member-student/member-student.component';

@NgModule({
  imports: [
    CommonModule,
    MainContentRoutingModule
  ],
  declarations: [MainContentComponent, AboutInfoComponent, AboutAdmissionComponent, MemberStudentComponent],
  providers: [MemberService]
})
export class MainContentModule { }
