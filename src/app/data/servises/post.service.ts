import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {commentCreateDto, Post, PostComments, PostCreateDto} from './interface/post.interface';
import {map, switchMap, tap} from 'rxjs';
import {Comment} from '@angular/compiler';


@Injectable({
  providedIn: 'root',

})

export class PostService {
  posts = signal<Post[]>([])
  #http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  createPost(payload: PostCreateDto) {
    return this.#http.post<Post>(`${this.baseApiUrl}post/`, payload)
      .pipe(
        switchMap( () => {
          return this.fetchPost()
        })
      )
  }

  fetchPost() {
    return this.#http.get<Post[]>(`${this.baseApiUrl}post/`)
      .pipe(
        tap(res => this.posts.set(res))
      )
  }

  createComment(payload: commentCreateDto) {
    return this.#http.post<PostComments>(`${this.baseApiUrl}comment/`, payload)
  }

  getCommentsByPostId(postId: number) {
    return this.#http.get<Post>(`${this.baseApiUrl}post/${postId}`)
    .pipe(
      map(res => res.comments)
    )
  }
}
