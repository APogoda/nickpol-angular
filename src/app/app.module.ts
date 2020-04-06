import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterComponent } from './components/master/master.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommentService } from './services/comment.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { CommentComponent } from './components/comment/comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LinkifyPipe } from './pipes/linkify.pipe';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    CommentsComponent,
    CommentComponent,
    LinkifyPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    InfiniteScrollModule,
    MatIconModule
  ],
  providers: [CommentService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
