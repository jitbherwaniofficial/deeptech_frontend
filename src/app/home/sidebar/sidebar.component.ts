import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data: any[] = [
    {
      "tasks": [
        {
          "task_id": 18882,
          "task_title": "Explore the world of management",
          "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
          "status": "notworkyet",
          "assets": [
            {
              "asset_id": 18883,
              "asset_title": "Technical Project Management",
              "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
              "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
              "asset_type": "display_asset",
              "asset_content_type": "video"
            },
            {
              "asset_id": 18884,
              "asset_title": "Threadbuild",
              "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
              "asset_content": " ",
              "asset_type": "input_asset",
              "asset_content_type": "threadbuilder"
            },
            {
              "asset_id": 18885,
              "asset_title": "Structure you pointers ",
              "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
              "asset_content": " ",
              "asset_type": "input_asset",
              "asset_content_type": "article"
            },
            {
              "asset_id": 18886,
              "asset_title": "4SA Method",
              "asset_description": "To explore more read more",
              "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
              "asset_type": "display_asset",
              "asset_content_type": "article"
            }
          ]
        }
      ]
    }
  ]
  // @Input() item:{asset_title:any,asset_description:any,asset_content:any} = {asset_title:'',asset_description:'',asset_content:''}
  expand = false
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getData()
    // this.data;
    console.log(this.data[0].tasks[0]['assets'])
  }

  expandSidebar(){
    this.expand = !this.expand;
  }

  // getData(){
  //   this.http.get<any>('http://localhost:3000').subscribe(res => {
  //     this.data = res[0].tasks;
  //   })
  // }

}
