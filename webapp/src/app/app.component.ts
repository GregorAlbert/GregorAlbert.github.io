import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as screenfull from 'screenfull';
import {MatSidenav} from '@angular/material';
import {Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isFullScreen = false;
  isDarkTheme = false;
  isSideNavOpened = false;
  showDelay = 300;
  currentHour = new Date().getHours();

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private translate: TranslateService, private router: Router) {

    this.isDarkTheme = this.currentHour < 8 && this.currentHour > 20 ;
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
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
