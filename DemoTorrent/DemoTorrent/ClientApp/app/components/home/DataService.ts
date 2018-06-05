import { Http, Response, Headers, Jsonp} from "@angular/http";
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private headers: Headers;
    constructor(private http: Http,
                private jsonp: Jsonp) {
        this.headers = new Headers();
    }
    public GetMovieList(parameter: any) {
        return this.jsonp.get('https://yifymovie.co/api/v2/list_movies.jsonp?' + parameter + '&callback=JSONP_CALLBACK').map((res: Response) => {
            return res.json();
        });
    }
}