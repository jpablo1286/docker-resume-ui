import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonalDataComponent implements OnInit {
  acId: string;
  key="de85c87a97aaab5ea8b85dc7932c8310";
  urlBase="http://api.juanrivera.org:8000/";
  summary:any;
  personaldata: any;
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
      this.snackBar.open('Empty or invalid token: Personal data locked','',{duration: 5000});
    }
    else{
      this.httpOptions = {
      headers: new HttpHeaders({
        'X-Apikey':  '763f133964cef21f7afe8fce17b755f0ce608828'
       })
      };
      this.snackBar.open('Valid token: Personal data unlocked','',{duration: 5000});
    }
    this.httpClient.get(this.urlBase + 'personaldata/',this.httpOptions).subscribe((res)=>{
        this.personaldata=res;
    });
    });
  }

}
