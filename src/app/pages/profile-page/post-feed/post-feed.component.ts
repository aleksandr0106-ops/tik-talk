import {Component, ElementRef, HostListener, inject, Renderer2} from '@angular/core';
import {PostInputComponent} from '../post-input/post-input.component';
import {PostComponent} from '../post/post.component';
import {PostService} from '../../../data/servises/post.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-post-feed',
  imports: [
    PostInputComponent,
    PostComponent
  ],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {
  postService = inject(PostService);
  feed =  this.postService.posts

  hostElement = inject(ElementRef);

  @HostListener('window:resize')
  onWindowResize() {

  }

  r2 = inject(Renderer2)

  constructor() {
    firstValueFrom(this.postService.fetchPost())
  }

  ngAfterViewInit() {
    this.resizeFeed()
  }

  resizeFeed() {
    const {top} = this.hostElement.nativeElement.getBoundingClientRect();

    const height = window.innerHeight - top - 24 - 24;
    this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`);
  }
}
