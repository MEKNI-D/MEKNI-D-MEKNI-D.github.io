import {Component} from '../../node_modules/@angular/core' ;
import { WidgetService } from './service/widget.service';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Http} from  '@angular/http';

import {  HttpModule } from '@angular/http';
import { Widget } from './service/widget'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'single-app',
    templateUrl: 'src/app/templates/widget.component.html',
    styles : [],
    styleUrls : ['src/app/styles/widget.style.scss']
})

export class WidgetComponent{

    public widg;
    public app_id : any;
    public errorString : String;


    constructor(private _widgetService: WidgetService, private route: ActivatedRoute){ }
    ngOnInit(){
        this.getWidget();
    }

        public getWidget(){

        this.route.params
            .map(params => params['app_id'])
            .subscribe((app_id) => {
                this._widgetService
                    .getSingleApp(app_id)
                    .subscribe( data => this.widg = JSON.parse(JSON.stringify(data.automationList)),
                        error => this.errorString = <any>error,
                        ()=>console.log('I made ittttttt  ' + this.widg[0].slug));
            });

        /*this._widgetService.getSingleApp().subscribe(
         data => this.widg = JSON.parse(JSON.stringify(data.automationList)),
         error => this.errorString = <any>error,
         ()=>console.log('I made ittttttt  ' + this.widg[0].slug)
         );*/
    }
}