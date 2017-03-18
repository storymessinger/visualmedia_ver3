import { CONTENT_ROUTES } from './content/content.routes';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [RouterModule.forChild([
        // {
        //     path: 'main',
        //     component: ContentComponent, children: CONTENT_ROUTES,
        //     data: {
        //         breadcrumb: "Main"
        //     }
        // },
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