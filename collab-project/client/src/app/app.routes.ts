import { Routes } from '@angular/router';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { MoreInfoComponent } from './pages/more-info/more-info.component';
export const routes: Routes = [
    {
        path:'',
        component: EntryPageComponent
    },
    {
        path:'info',
        component: MoreInfoComponent
    }
];
