import { Component, OnInit } from '@angular/core';

import {IComment} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute:ActivatedRoute, private  commentService:CommentService) {
  }

  ngOnInit(): void {
   this.activatedRoute.data.subscribe(({commentData})=>this.comment = commentData)
  }

}
