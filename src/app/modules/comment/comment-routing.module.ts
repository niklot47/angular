import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentsResolver} from "./services/comments.resolver";
import {CommentResolver} from "./services/comment.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
  resolve: {commentsData : CommentsResolver},
  children: [
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: ':id', component: CommentDetailsComponent,
      resolve: {commentData: CommentResolver}},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
