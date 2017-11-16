import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';



@Component({
  selector: 'app-article',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {
  articleID: number;
  article;

  constructor(private route: ActivatedRoute, private _articleService: ArticleService) {
    this.route.params.subscribe(
      params => this.articleID = params['id']
    );
    this.article = _articleService.getArticleById(this.articleID);
  }

  ngOnInit() {}

}
