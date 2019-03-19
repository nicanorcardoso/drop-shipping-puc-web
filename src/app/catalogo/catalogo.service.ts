import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { ItemCatalogo } from "./item-catalogo/item-catalogo.model";

@Injectable()
export class CatalogoService{

    constructor (private http: Http){}

    catalogo(): Observable<ItemCatalogo[]>{
        return this.http.get(`${MEAT_API}/catalogo`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    itemCatalogoById(id: string): Observable<ItemCatalogo>{

        return this.http.get(`${MEAT_API}/catalogo/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)            
    }

}