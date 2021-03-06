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
let AppComponent = class AppComponent {
    constructor(_widgetService, route) {
        this._widgetService = _widgetService;
        this.route = route;
    }
    ngOnInit() {
        this.getWidgets();
        //this.getWidget();
    }
    getWidgets() {
        this._widgetService.getAllWidgets().subscribe(data => this.widgets = JSON.parse(JSON.stringify(data)), error => this.errorString = error, () => console.log('donee' + this.widgets));
    }
    ;
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'src/app/templates/app.component.html',
        styles: [],
        styleUrls: ['src/app/styles/widget.style.scss']
    }), 
    __metadata('design:paramtypes', [widget_service_1.WidgetService, router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
