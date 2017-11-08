import {Component, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as screenfull from 'screenfull';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isFullScreen = false;
  isDarkTheme = false;
  isSideNavOpened = false;
  showDelay = 300;

  @ViewChild('sidenav') sidenav: MatSidenav;

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

  toggleSideNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
    this.sidenav.toggle();
  }

}
