import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data:any[] = []
  // @Input() item:{asset_title:any,asset_description:any,asset_content:any} = {asset_title:'',asset_description:'',asset_content:''}
  expand = false
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
    console.log(this.data)
  }

  expandSidebar(){
    this.expand = !this.expand;
  }

  getData(){
    this.http.get<any>('http://localhost:3000').subscribe(res => {
      this.data = res[0].tasks;
      // console.log(this.data)
    })
  }

}
