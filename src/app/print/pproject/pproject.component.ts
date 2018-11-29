import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pproject',
  templateUrl: './pproject.component.html',
  styleUrls: ['./pproject.component.css']
})
export class PprojectComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectInstitution: string;
  @Input() projectDate: string;
  @Input() projectDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
