import { Component, EventEmitter, Output } from '@angular/core';

@Component({
   selector: 'app-create-post',
   templateUrl: './create-post.component.html',
   styleUrls: ['./create-post.component.css']

})

export class CreatePostClass{
  // attribures
  userPost = "No message";
  userTitle = "Add title here ..";
  userContent = "Add message here..";
  @Output() onPostCreate = new EventEmitter();
  // functions
  AddPost() {
    const post = { title: this.userTitle, content: this.userContent };
    this.onPostCreate.emit(post);
  }
}
