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
                { 
                    path: 'content', 
                    loadChildren: 'app/main/main-content/main-content.module#MainContentModule'
                }
            ],
        }
    ])],
    exports: [RouterModule]
})

export class MainRoutingModule {}