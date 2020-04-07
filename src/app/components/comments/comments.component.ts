import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: CommentModel[];
  search: string = null;
  size = 10;
  page = 0;

  constructor(private commentService: CommentService) {}

  async ngOnInit(): Promise<void> {
    await this.setComments();
  }

  private async setComments() {
    this.comments = await this.commentService.getComments(this.search, this.size, this.page);
  }

  async onSearchChange() {
    this.page = 0;
    this.comments = await this.commentService.getComments(this.search, this.size, this.page);
  }

  async onScroll() {
    this.page += 1;
    this.comments = this.comments.concat(await this.commentService.getComments(this.search, this.size, this.page));
  }
}
