import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileModule } from 'app/main/profile/profile.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { UIFormsModule } from 'app/main/forms/forms.module';
const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path        : 'academy',
        loadChildren: './academy/academy.module#AcademyModule'
    },
   
    {
        path        : 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule,
        ProfileModule,
        UIFormsModule

    ]
})
export class AppsModule
{
}
