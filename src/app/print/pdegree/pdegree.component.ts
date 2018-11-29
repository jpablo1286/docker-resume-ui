import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pdegree',
  templateUrl: './pdegree.component.html',
  styleUrls: ['./pdegree.component.css']
})
export class PdegreeComponent implements OnInit {
  @Input() degreeName: string;
  @Input() degreeInstitution: string;
  @Input() degreeDate: string;

  constructor() { }

  ngOnInit() {
  }

}
