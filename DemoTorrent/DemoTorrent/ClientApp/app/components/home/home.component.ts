import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from './Model';
import { DataService } from './DataService';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    movielist : Movie[];

    constructor(private http: Http,
        private dataService: DataService) {
    }

     ngOnInit(): void {
         this.GetMovieData('sort_by=year');
    }

     GetMovieData(parameter: any) {
         this.dataService.GetMovieList(parameter).subscribe(response => {
             this.movielist = response.data.movies;
         });
     }

}
