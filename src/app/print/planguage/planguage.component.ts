import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planguage',
  templateUrl: './planguage.component.html',
  styleUrls: ['./planguage.component.css']
})
export class PlanguageComponent implements OnInit {
  @Input() languageName: string;
  @Input() languageWritten: string;
  @Input() languageReading: string;
  @Input() languageSpoken: string;
  constructor() { }

  ngOnInit() {
  }

}
