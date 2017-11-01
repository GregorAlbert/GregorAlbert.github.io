import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isFullScreen = false;
  isDarkTheme = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  toggleFullScreen() {
    if (screenfull.enabled) {
      this.isFullScreen = !this.isFullScreen;
      screenfull.toggle();
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
