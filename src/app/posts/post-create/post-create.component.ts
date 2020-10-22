import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-creae'
})
export class PostCreateComponent {
  enteredValue: string;
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement): void {
    console.log(postInput);
    this.newPost = postInput.value;
  }
}
