import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { routing } from './app.routes';
import {  HttpModule } from '@angular/http';
import { WidgetService } from './service/widget.service';
import {WidgetComponent} from "./widget.component";


/*@NgModule({
    imports: [ BrowserModule],       // module dependencies
    declarations: [ AppComponent],   // components and directives
    bootstrap: [ AppComponent ],     // root component
    providers: [HTTP_PROVIDERS]                    // services
})*/

@NgModule({
    imports: [ BrowserModule, routing, HttpModule],
    declarations: [ AppComponent, WidgetComponent],
    bootstrap: [ AppComponent ],
    providers: [ HTTP_PROVIDERS, WidgetService]
})
export class AppModule { }