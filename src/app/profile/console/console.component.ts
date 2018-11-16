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
  urlBase="http://localhost:8000/";
  name: string;
  currentPosition: string;
  summary: string;
  private sub: any;
  degrees: any;
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar,private httpClient: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
    this.httpClient.get(this.urlBase + 'summary/').subscribe((res)=>{
        this.name=res.name;
        this.currentPosition=res.currentPosition;
        this.summary=res.summary;
    });
    this.httpClient.get(this.urlBase +'degree/').subscribe((res)=>{
        this.degrees=res;
    });
    if (this.acId != "de85c87a97aaab5ea8b85dc7932c8310")
    {
      this.snackBar.open('Empty or invalid token: Personal data locked','',{duration: 5000});
    }
    else{
      this.snackBar.open('Valid token: Personal data unlocked','',{duration: 5000});
    }
    });
  }

}
