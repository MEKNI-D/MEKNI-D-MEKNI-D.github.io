import { Injectable, Inject } from "@angular/core"
import { Http, Response,  RequestOptions, Headers, Request, RequestMethod } from '@angular/http';

import {  Router, ActivatedRoute } from '@angular/router'

import {Observable} from 'rxjs/Observable';
import { Widget } from './widget';
import 'rxjs/Rx'

@Injectable()
export class WidgetService{

    constructor(private http: Http){
            this.http = http
    }
    private endpoint_url = "https://demo4475807.mockable.io/templates_by_apps";
    getAllWidgets():any{

        var result = this.http
            .get(this.endpoint_url)
            .map((res: Response) => res.json())
            .catch(this.handleError);

        console.log(result);
        return this.http
         .get(this.endpoint_url)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }

    getSingleApp (id):any{
        return this.getAllWidgets()
            .map((widgets) => widgets.find(w => w.app_id === id));
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}