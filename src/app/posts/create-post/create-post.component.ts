import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
   selector: 'app-create-post',
   templateUrl: './create-post.component.html',
   styleUrls: ['./create-post.component.css']

})

export class CreatePostClass {
  // attribures for the create post component
   userPost = 'No message';
   constructor(public postService: PostService){};
  // functions for the create post component
  AddPost(form: NgForm) {
    if ( form.invalid ) {
      return null;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}
