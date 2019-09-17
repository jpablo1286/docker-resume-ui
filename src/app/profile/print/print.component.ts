import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  acId: string;
  key="bf5e23edf951ce1e0291feda6a911253";
  urlBase="http://juanrivera.org:8000/";
  summary:any;
  skills:any;
  personaldata: any;
  expiriences: any;
  languages: any;
  degrees: any;
  awards: any;
  certificates: any;
  projects: any;
  httpOptions:any;

  private sub: any;
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar,private httpClient: HttpClient) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
    this.httpClient.get(this.urlBase + 'summary/').subscribe((res)=>{
        this.summary=res;
    });



    if (this.acId != this.key)
    {
      this.httpOptions = {
      headers: new HttpHeaders({
        'X-Apikey':  ''
       })
      };
    }
    else{
      this.httpOptions = {
      headers: new HttpHeaders({
        'X-Apikey':  '763f133964cef21f7afe8fce17b755f0ce608828'
       })
      };
    }
    this.httpClient.get(this.urlBase + 'personaldata/',this.httpOptions).subscribe((res)=>{
        this.personaldata=res;
    });
    this.httpClient.get(this.urlBase + 'skill/').subscribe((res)=>{
        this.skills=res;
    });
    this.httpClient.get(this.urlBase + 'expirience/').subscribe((res)=>{
        this.expiriences=res;
    });
    this.httpClient.get(this.urlBase + 'language/').subscribe((res)=>{
        this.languages=res;
    });
    this.httpClient.get(this.urlBase +'degree/').subscribe((res)=>{
        this.degrees=res;
    });
    this.httpClient.get(this.urlBase +'certificate/').subscribe((res)=>{
        this.certificates=res;
    });
    this.httpClient.get(this.urlBase +'award/').subscribe((res)=>{
        this.awards=res;
    });
    this.httpClient.get(this.urlBase + 'project/').subscribe((res)=>{
        this.projects=res;
    });
    });
  }

}
