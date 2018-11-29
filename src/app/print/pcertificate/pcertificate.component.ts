import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pcertificate',
  templateUrl: './pcertificate.component.html',
  styleUrls: ['./pcertificate.component.css']
})
export class PcertificateComponent implements OnInit {
  @Input() certificateName: string;
  @Input() certificateInstitution: string;
  @Input() certificateDate: string;
  constructor() { }

  ngOnInit() {
  }

}
