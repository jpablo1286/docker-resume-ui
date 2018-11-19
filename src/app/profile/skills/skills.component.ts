import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-console',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  acId: string;
  key="de85c87a97aaab5ea8b85dc7932c8310";
  urlBase="http://192.168.28.142:8000/";
  skills: any;
  summary: any;
  private sub: any;
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar,private httpClient: HttpClient) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
    this.httpClient.get(this.urlBase + 'summary/').subscribe((res)=>{
        this.summary=res;
    });
    this.httpClient.get(this.urlBase + 'skill/').subscribe((res)=>{
        this.skills=res;
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