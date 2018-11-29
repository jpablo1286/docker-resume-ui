import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  acId: string;
  key="";
  urlBase="http://api.juanrivera.org:8000/";
  summary: any;
  private sub: any;
  degrees: any;
  certificates: any;
  awards: any;
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar,private httpClient: HttpClient) { }
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
    this.httpClient.get(this.urlBase + 'summary/').subscribe((res)=>{
        this.summary=res;
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
