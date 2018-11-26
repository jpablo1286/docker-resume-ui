import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {
  @Input() awardName: string;
  @Input() awardInstitution: string;
  @Input() awardDescription: string;
  @Input() awardDate: string;
  constructor() { }

  ngOnInit() {
  }

}
