import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private ifPostUpdated = new Subject<Post[]>();
  getPosts() {
    return [...this.posts];
  }
  getPostsUpdates() {
    return this.ifPostUpdated.asObservable();
  }
  addPost(title: string, content: string) {
       const post: Post = {title: title, content:content};
       this.posts.push(post);
       this.ifPostUpdated.next([...this.posts]);
  }
}
