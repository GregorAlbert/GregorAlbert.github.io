import {Injectable} from '@angular/core';

class Article {
  id: number;
  description: string;
  date: string;
  content: string[];
  gallery: string[];
  lat: number;
  lon: number;
  zoom: number;
}

@Injectable()
export class ArticleService {

  articles: Article[] = [
    {
      id: 1,
      description: 'Patagonia',
      date: '19.1.2017',
      content: [
        'Aenean congue massa nec sagittis placerat. Sed tincidunt pellentesque tempus. Pellentesque in lacinia elit, ac laoreet ante. Vestibulum quis nibh ut nunc dignissim porttitor eget vel nulla. Mauris enim leo, ultrices id augue et, vehicula malesuada tellus. Mauris ut imperdiet mauris. Mauris consectetur vehicula nunc, quis sollicitudin tortor elementum sit amet. Phasellus in arcu sit amet orci eleifend mattis eget ut risus. Morbi id tincidunt turpis. Sed nec ante sit amet est auctor varius. Etiam at ullamcorper mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum mauris leo, ut finibus tortor lacinia quis.',
        'b'
      ],
      gallery: [
        '/assets/images/home-page.jpg',
        '/assets/images/home-page.jpg'
      ],
      lat: 0,
      lon: 0,
      zoom: 1
    },
    {
      id: 2,
      description: 'Patagonia',
      date: '19.1.2017',
      content: [
        'a',
        'b'
      ],
      gallery: [
        '/assets/images/home-page.jpg',
        '/assets/images/home-page.jpg'
      ],
      lat: 10,
      lon: 0,
      zoom: 1
    },
    {
      id: 3,
      description: 'Patagonia',
      date: '19.1.2017',
      content: [
        'asdfsfg sdf g f sd gsd g sdgsfd gs dg s',
        's dfg sd gsd '
      ],
      gallery: [
        '/assets/images/home-page.jpg',
        '/assets/images/home-page.jpg'
      ],
      lat: 0,
      lon: 10,
      zoom: 1
    },
    {
      id: 4,
      description: 'Pania',
      date: '19.1.2017',
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dapibus erat. Integer purus nibh, fermentum eget elementum a, interdum id enim. Duis tincidunt bibendum turpis, sed lacinia lorem. Pellentesque blandit leo at scelerisque dictum. Fusce aliquet nunc erat, nec aliquam ligula convallis viverra. Maecenas ligula tellus, sodales a consectetur in, consectetur non justo. Donec egestas mollis leo. Curabitur congue sodales risus id vehicula. Nulla turpis enim, viverra a magna vitae, sagittis aliquam sapien. Praesent maximus nulla egestas, vulputate justo et, sagittis sem. Maecenas vel commodo diam, et iaculis nulla. Vivamus condimentum justo lacinia nibh aliquam varius. Duis sit amet magna sed augue consequat blandit.',
        'Aenean congue massa nec sagittis placerat. Sed tincidunt pellentesque tempus. Pellentesque in lacinia elit, ac laoreet ante. Vestibulum quis nibh ut nunc dignissim porttitor eget vel nulla. Mauris enim leo, ultrices id augue et, vehicula malesuada tellus. Mauris ut imperdiet mauris. Mauris consectetur vehicula nunc, quis sollicitudin tortor elementum sit amet. Phasellus in arcu sit amet orci eleifend mattis eget ut risus. Morbi id tincidunt turpis. Sed nec ante sit amet est auctor varius. Etiam at ullamcorper mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum mauris leo, ut finibus tortor lacinia quis.',
        'Nulla sed libero lacinia, consequat nisl vel, pharetra lorem. Mauris pellentesque nisi dui, eu congue felis semper eu. Fusce mattis magna quis dolor molestie, eu congue nisl placerat. Mauris sodales justo eu nunc tempor efficitur. Vivamus ex nibh, euismod in libero sit amet, consectetur fermentum massa. Curabitur euismod varius dolor, ac luctus tellus gravida sit amet. Nunc eu diam lectus. Praesent eu vulputate quam, quis ultrices magna. Duis vel orci vitae augue tincidunt vestibulum. Nulla elementum lacinia massa vitae elementum. In et elementum nisl, a blandit orci. Vestibulum vehicula, purus a rutrum interdum, elit nulla hendrerit nunc, at mattis massa lorem sed ante. Nulla facilisi. Morbi semper sapien ornare sagittis laoreet.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non pulvinar sapien. Integer nec aliquam sem. Quisque vel ultrices massa, at gravida metus. Aliquam vel libero condimentum, semper sapien nec, volutpat libero. Etiam tincidunt iaculis laoreet. Curabitur posuere risus quis elit condimentum, ac finibus justo consequat.',
        'Vestibulum eu tellus quis mi bibendum varius. Morbi malesuada ipsum risus, sit amet lobortis tortor maximus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus urna eget justo commodo, vel finibus magna mattis. Phasellus felis magna, tincidunt nec velit nec, semper volutpat mi. Nam tincidunt convallis aliquet. Nam cursus nisl eu arcu porta vestibulum. In non augue eget mauris feugiat ultrices. Ut pulvinar urna finibus, dapibus nisl ut, pulvinar augue. Duis eget nisi rhoncus, consequat dui at, malesuada nisi. Vivamus tincidunt nunc id egestas congue. Praesent pellentesque iaculis massa non hendrerit.'
      ],
      gallery: [
        '/assets/images/home-page.jpg',
        '/assets/images/home-page.jpg'
      ],
      lat: 10,
      lon: 10,
      zoom: 1
    }
  ];

  public getArticles() {
    return this.articles;
  }

  public getArticleById(id: number) {
    return this.articles.filter(x => x.id == id)[0];
  }

  public getLastArticle() {
    return this.articles[this.articles.length - 1];
  }

  constructor() {
  }

}
