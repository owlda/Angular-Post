import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostClass implements OnInit, OnDestroy {

   posts: Post[] = [];
   private postSubscription: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postSubscription = this.postService.getPostsUpdates().subscribe(( posts: Post[] ) => {
      this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
