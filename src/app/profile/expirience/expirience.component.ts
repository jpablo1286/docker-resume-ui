import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css']
})
export class ExpirienceComponent implements OnInit {
  @Input() expirienceName: string;
  @Input() expirienceInstitution: string;
  @Input() expirienceDate: string;
  @Input() expirienceDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
