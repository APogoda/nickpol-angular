import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommentModel } from '../models/comment.model';

@Injectable()
export class CommentService {
  private baseUrl = 'https://nickpol.azurewebsites.net/api/v1/';
  constructor(private http: HttpClient) {}

  getComments(
    search?: string,
    size?: number,
    page?: number
  ): Promise<CommentModel[]> {
    let searchParams = new HttpParams();
    if (search) { searchParams = searchParams.set('search', search); }
    if (size) {  searchParams = searchParams.set('size', '' + size); }
    if (page) {  searchParams = searchParams.set('page', '' + page); }
    return this.http
      .get<CommentModel[]>(`${this.baseUrl}/comments?${searchParams}`)
      .toPromise();
  }

  getComment(commentId: string): Promise<CommentModel> {
    return this.http
      .get<CommentModel>(`${this.baseUrl}/comments/${commentId}`)
      .toPromise();
  }
}
