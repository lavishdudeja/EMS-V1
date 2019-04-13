import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { AcademyCoursesComponent } from 'app/main/apps/academy/courses/courses.component';
import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';
import { AcademyCourseService } from 'app/main/apps/academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AcademyCoursesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers   : [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class AcademyModule
{
}
