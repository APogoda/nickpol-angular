import { CommentModel } from '../../models/comment.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  public comment: CommentModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService
  ) {}

  async ngOnInit() {
    if (!this.comment) {
      const commentId = this.activatedRoute.snapshot.paramMap.get('commentId');
      if (commentId) {
        this.comment = await this.commentService.getComment(commentId);
      }
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
