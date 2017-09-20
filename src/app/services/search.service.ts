import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService{

    private query : string;
    private API_URL : string= 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
    private API_KEY : string= 'AIzaSyCDD25WB0LQFcU5Uim3szYpHiWzHVd3pNg';
    private URL : string=this.API_URL;
    private PER_PAGE:string="&per_page=10";

    

    constructor(private _http : Http){}

    getImages(query){
        return this._http.get(this.URL+query+'&key='+this.API_KEY).map(result => result.json());
    }
   

    
}