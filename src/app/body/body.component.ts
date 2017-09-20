import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl : './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  Url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=";
  apikey = "&key=AIzaSyCDD25WB0LQFcU5Uim3szYpHiWzHVd3pNg";

  @Input() Image : any[];


  constructor() { }

  ngOnInit() {
  }

}
