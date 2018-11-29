import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paward',
  templateUrl: './paward.component.html',
  styleUrls: ['./paward.component.css']
})
export class PawardComponent implements OnInit {
  @Input() awardName: string;
  @Input() awardInstitution: string;
  @Input() awardDate: string;
  @Input() awardDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
