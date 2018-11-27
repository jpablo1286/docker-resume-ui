import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectInstitution: string;
  @Input() projectDate: string;
  @Input() projectDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
