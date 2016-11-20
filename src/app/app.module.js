"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const http_1 = require('@angular/http');
const app_routes_1 = require('./app.routes');
const http_2 = require('@angular/http');
const widget_service_1 = require('./service/widget.service');
const widget_component_1 = require("./widget.component");
/*@NgModule({
    imports: [ BrowserModule],       // module dependencies
    declarations: [ AppComponent],   // components and directives
    bootstrap: [ AppComponent ],     // root component
    providers: [HTTP_PROVIDERS]                    // services
})*/
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_2.HttpModule],
        declarations: [app_component_1.AppComponent, widget_component_1.WidgetComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [http_1.HTTP_PROVIDERS, widget_service_1.WidgetService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
