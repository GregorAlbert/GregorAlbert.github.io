import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  selectedArticle;
  articles;

  constructor(private _router: Router, private _articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }

  onSelect(art) {
    this.selectedArticle = art;
    this._router.navigate(['/article', art.id]);
  }


}
