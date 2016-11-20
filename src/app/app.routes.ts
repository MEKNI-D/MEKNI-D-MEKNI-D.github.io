import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {WidgetComponent} from "./widget.component";

const routes: Routes = [
    {
        path: 'apps',
        component: AppComponent,
    },
    {
        path: 'widget/:app_id',
        component: WidgetComponent,
    },
    {
        path: '**',
        redirectTo: '/apps',
        pathMatch: 'full'
    },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);