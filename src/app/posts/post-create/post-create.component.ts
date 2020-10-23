import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-creae',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue: string;
  newPost = 'NO CONTENT';

  onAddPost(postInput: string): void {
    console.log(postInput);
    this.newPost = postInput;
  }
}
