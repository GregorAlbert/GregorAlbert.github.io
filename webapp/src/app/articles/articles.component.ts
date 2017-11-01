import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: string[];

  constructor() {
    this.articles = ['Windstorm','Bombasto','Magneta','Tornado','a','b'];
  }

  ngOnInit() {
  }

}
