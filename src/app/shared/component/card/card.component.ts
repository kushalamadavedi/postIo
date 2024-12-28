import { Component, OnInit, Input } from '@angular/core';
import { Ipost } from 'src/app/models/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() getposts !: Array<Ipost>

  constructor() { }

  ngOnInit(): void {
  }

}
