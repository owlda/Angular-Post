import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostClass implements OnInit {

   posts: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postService.getPostsUpdates().subscribe(( posts: Post[] ) => {
      this.posts = posts;
    });
  }

}
