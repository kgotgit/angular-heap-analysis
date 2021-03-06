import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular-heap-analysis';

  _links:any;



  ngOnInit(): void {
      this.createLinks();
  }


  createLinks(){
    this._links=new Array();

    this._links.push({path:"pages/page-one",label:"Page One"});
    this._links.push({path:"pages/page-two",label:"Page Two"});
    this._links.push({path:"pages/page-three",label:"Page three"});
    this._links.push({path:"pages/page-four",label:"Page Four"});

  }

}
