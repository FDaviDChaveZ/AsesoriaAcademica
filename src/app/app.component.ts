// angular import
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  // public props
  title = 'mantis-free-version';

  constructor(private _translate: TranslateService, @Inject(DOCUMENT) private _document: Document) {
    _translate.addLangs(['es', 'en']);
    _translate.setDefaultLang('en');
  }

  ngOnInit() {
    this._document.documentElement.lang = 'en';
  }
}


