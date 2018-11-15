import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {
  @Input() degreeName: string;
  @Input() degreeInstitution: string;
  @Input() degreeDegree: string;
  @Input() degreeDate: string;
  @Input() degreeUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
