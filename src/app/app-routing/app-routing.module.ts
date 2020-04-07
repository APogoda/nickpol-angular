import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../components/comments/comments.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from '../components/comment/comment.component';

const routes: Routes = [
  { path: '', component: CommentsComponent },
  { path: ':commentId', component: CommentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
