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
const core_1 = require('../../node_modules/@angular/core');
const widget_service_1 = require('./service/widget.service');
const router_1 = require('@angular/router');
let WidgetComponent = class WidgetComponent {
    constructor(_widgetService, route) {
        this._widgetService = _widgetService;
        this.route = route;
    }
    ngOnInit() {
        this.getWidget();
    }
    getWidget() {
        this.route.params
            .map(params => params['app_id'])
            .subscribe((app_id) => {
            this._widgetService
                .getSingleApp(app_id)
                .subscribe(data => this.widg = JSON.parse(JSON.stringify(data.automationList)), error => this.errorString = error, () => console.log('I made ittttttt  ' + this.widg[0].slug));
        });
        /*this._widgetService.getSingleApp().subscribe(
         data => this.widg = JSON.parse(JSON.stringify(data.automationList)),
         error => this.errorString = <any>error,
         ()=>console.log('I made ittttttt  ' + this.widg[0].slug)
         );*/
    }
};
WidgetComponent = __decorate([
    core_1.Component({
        selector: 'single-app',
        templateUrl: 'src/app/templates/widget.component.html',
        styles: [],
        styleUrls: ['src/app/styles/widget.style.scss']
    }), 
    __metadata('design:paramtypes', [widget_service_1.WidgetService, router_1.ActivatedRoute])
], WidgetComponent);
exports.WidgetComponent = WidgetComponent;
