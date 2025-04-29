import {Component, inject, input, OnInit, signal} from '@angular/core';
import {Post, PostComments} from '../../../data/servises/interface/post.interface';
import {CircleComponent} from '../../../common-ui/circle/circle.component';
import {DatePipe} from '@angular/common';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';
import {PostInputComponent} from '../post-input/post-input.component';
import {CommentComponent} from './comment/comment.component';
import {PostService} from '../../../data/servises/post.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [
    CircleComponent,
    DatePipe,
    SvgIconComponent,
    PostInputComponent,
    CommentComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post = input<Post>()

  postService = inject(PostService)

  comment = signal<PostComments[]>([])

 async ngOnInit() {
    this.comment.set(this.post()!.comments)
  }

  async onCreated() {
    const comments = await firstValueFrom(this.postService.getCommentsByPostId(this.post()!.id))

    this.comment.set(comments)
  }
}
