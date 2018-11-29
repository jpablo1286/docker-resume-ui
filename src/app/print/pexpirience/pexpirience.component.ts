import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pexpirience',
  templateUrl: './pexpirience.component.html',
  styleUrls: ['./pexpirience.component.css']
})
export class PexpirienceComponent implements OnInit {
  @Input() expirienceName: string;
  @Input() expirienceInstitution: string;
  @Input() expirienceDate: string;
  @Input() expirienceDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
