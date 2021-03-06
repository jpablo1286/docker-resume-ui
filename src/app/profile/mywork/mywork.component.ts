import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyWorkComponent implements OnInit {
  acId: string;
  key="bf5e23edf951ce1e0291feda6a911253";
  urlBase="http://juanrivera.org:8000/";
  expiriences: any;
  summary:any;
  projects: any;
  repos: any;
  private sub: any;
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar,private httpClient: HttpClient) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
    this.httpClient.get(this.urlBase + 'summary/').subscribe((res)=>{
        this.summary=res;
    });
    this.httpClient.get(this.urlBase + 'expirience/').subscribe((res)=>{
        this.expiriences=res;
    });

    this.httpClient.get(this.urlBase + 'project/').subscribe((res)=>{
        this.projects=res;
    });

    this.httpClient.get(this.urlBase + 'code/').subscribe((res)=>{
        this.repos=res;
    });

    if (this.acId != this.key)
    {
      this.snackBar.open('Empty or invalid token: Personal data locked','',{duration: 5000});
    }
    else{
      this.snackBar.open('Valid token: Personal data unlocked','',{duration: 5000});
    }
    });
  }

}
