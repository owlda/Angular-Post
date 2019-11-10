import { Component } from '@angular/core';

@Component({

   selector: 'app-create-post',
   templateUrl: './create-post.component.html',
   styleUrls: ['./create-post.component.css']

})

export class CreatePostClass{
  userPost;

  AddPost(){

    return this.userPost;

  }


}
