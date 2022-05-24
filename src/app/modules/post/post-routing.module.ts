import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolver} from "./services/posts.resolver";
import {PostResolver} from "./services/post.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: ':id', component: PostDetailsComponent,
        resolve: {postData: PostResolver}},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
