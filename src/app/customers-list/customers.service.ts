import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Customers } from "./customers.model";
import { ErrorHandler } from "app/app.error-handler";
import { MEAT_API } from "app/app.api";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
;

@Injectable()
export class CustomersService{

    constructor(private http: Http){}

    customers(): Observable<Customers[]>{
        return this.http.get(`${MEAT_API}/customers`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
        
    }

}