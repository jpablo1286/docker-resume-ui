import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  @Input() languageName: string;
  @Input() languageReading: string;
  @Input() languageWriting: string;
  @Input() languageSpoken: string;
  constructor() { }

  ngOnInit() {
  }

}
