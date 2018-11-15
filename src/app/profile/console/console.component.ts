import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  acId: string;
  private sub: any;
  degrees = [{ name:"Bacherol's Degree", institution:'Universidad del Valle', degree:'Electronic Engeneer', date:'2004-2010', url:'https://material.angular.io/assets/img/examples/shiba1.jpg'}];
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.acId = params['acId'];
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
