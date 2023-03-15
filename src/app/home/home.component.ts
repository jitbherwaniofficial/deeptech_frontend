import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get<any>('http://localhost:3000').subscribe(res => {
      this.data = res[0].tasks;
      // console.log(this.data)
    })
  }


}
