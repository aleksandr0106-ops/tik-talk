import {Component, EventEmitter, HostBinding, inject, input, Output, output, Renderer2} from '@angular/core';
import {CircleComponent} from '../../../common-ui/circle/circle.component';
import {ProfileService} from '../../../data/servises/profile.service';
import {NgIf} from '@angular/common';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';
import {PostService} from '../../../data/servises/post.service';
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {PostComments} from '../../../data/servises/interface/post.interface';

@Component({
  selector: 'app-post-input',
  imports: [
    CircleComponent,
    NgIf,
    SvgIconComponent,
    FormsModule
  ],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {

  isCommentInput = input(false)
  postId = input<number>(0)
  profile = inject(ProfileService).me

  @Output() created = new EventEmitter<PostComments>()

  @HostBinding('class.comment')
  get isComment() {
    return this.isCommentInput()
  }

  r2 = inject(Renderer2)
  postService = inject(PostService)

  postText = ''



  onTextAreaInput(event: Event) {
    const textarea =  event.target as HTMLTextAreaElement;

    this.r2.setStyle(textarea, 'height', 'auto');
    this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px');
  }

  onCreatePost() {
    if (!this.postText) return

    if (this.isCommentInput()) {
      firstValueFrom(this.postService.createComment({
        text: this.postText,
        authorId: this.profile()!.id,
        postId: this.postId()
      })).then(() => {
        this.postText = ''
        this.created.emit()
      })

      return;
    }

    firstValueFrom(this.postService.createPost({
      title: 'Клёвый пост',
      content: this.postText,
      authorId: this.profile()!.id
    })).then(() => {
      this.postText = ''
    })
  }
}
