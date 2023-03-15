import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  show = true;
  clicked = true

  @Input() item:{asset_title:any,asset_description:any,asset_content:any} = {asset_title:'',asset_description:'',asset_content:''}
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotothreadbuild(){
    this.clicked = !this.clicked
    this.router.navigate(['/home/threadbuild'])
  }

}
