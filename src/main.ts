import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone'
import {  Router } from '@angular/router'

import { platformBrowserDynamic  } from '../node_modules/@angular/platform-browser-dynamic/';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

