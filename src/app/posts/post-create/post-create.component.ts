import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;
  newPost = 'NO CONTENT';

  onAddPost(postInput: string): void {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }
}
