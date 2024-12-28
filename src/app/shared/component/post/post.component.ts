import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/post';
import { skillArray } from '../../const/postI';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
skill : Array <Ipost>  = skillArray
  constructor() { }

  ngOnInit(): void {
  }

}
