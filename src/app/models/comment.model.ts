export interface CommentModel {
  commentLink: string;
  system: System;
  workLink: string;
  workName: string;
  questionText: string;
  text: string;
  authorName: string;
  dt: Date;
}

export enum System {
  VK = 'VK',
  AT = 'AT'
}
