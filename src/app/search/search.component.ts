import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Images : any[];
  // Url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=";
  // apikey = "&key=AIzaSyAiMSeDQ3c9MS-oVjfr3ihSv0a14g3jOT8";
  constructor(private searchservice : SearchService) { }

  handleSuccess(data){
    this.Images=data.results;
    console.log(data.results);

  }

  searchImages(query : string){
    return this.searchservice.getImages(query).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () => console.log("request complete")
    )
  }
  
  ngOnInit() {
  }

}
