import {Component, input} from '@angular/core';
import {CircleComponent} from '../../../../common-ui/circle/circle.component';
import {PostComments} from '../../../../data/servises/interface/post.interface';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-comment',
  imports: [
    CircleComponent,
    DatePipe
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  comment = input<PostComments>()
}
