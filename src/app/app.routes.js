"use strict";
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const widget_component_1 = require("./widget.component");
const routes = [
    {
        path: 'apps',
        component: app_component_1.AppComponent,
    },
    {
        path: 'widget/:app_id',
        component: widget_component_1.WidgetComponent,
    },
    {
        path: '**',
        redirectTo: '/apps',
        pathMatch: 'full'
    },
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(routes);
