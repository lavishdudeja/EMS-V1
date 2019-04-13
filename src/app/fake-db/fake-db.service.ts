import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AnalyticsDashboardDb } from 'app/fake-db/dashboard-analytics';
import { CalendarFakeDb } from 'app/fake-db/calendar';
import { AcademyFakeDb } from 'app/fake-db/academy';
import { ContactsFakeDb } from 'app/fake-db/contacts';
import { InvoiceFakeDb } from 'app/fake-db/invoice';
import { ProfileFakeDb } from 'app/fake-db/profile';



import { IconsFakeDb } from 'app/fake-db/icons';

import { QuickPanelFakeDb } from 'app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
           
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar
            'calendar': CalendarFakeDb.data,

           

            // Academy
            'academy-categories': AcademyFakeDb.categories,
            'academy-courses'   : AcademyFakeDb.courses,
            'academy-course'    : AcademyFakeDb.course,

            

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

          

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Icons
            'icons': IconsFakeDb.icons,

        
            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
