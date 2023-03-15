import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

  clicked= true
  show =true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  opentitlebar(){
    this.clicked = !this.clicked;
  }

  openthread(){
    this.show = !this.show;
  }

 
}
