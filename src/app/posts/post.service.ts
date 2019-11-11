import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private ifPostUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

   getPosts() {
    this.http.get<{id: string, message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((Data) => {
             this.posts = Data.posts;
             this.ifPostUpdated.next([...this.posts]);
    }); }


    // GET methode to take the posts from express server

  GetPostUpdateListener() {
    return this.ifPostUpdated.asObservable();
  }
  AddPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    // adding a post to the express
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe((reponseData) => {
      console.log(reponseData.message);
      this.posts.push(post);
      this.ifPostUpdated.next([...this.posts]);
    });
  }
}
