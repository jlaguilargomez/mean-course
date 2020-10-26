import { Component, EventEmitter, Output, TRANSLATIONS_FORMAT } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle: string;
  enteredContent: string;

  constructor(private postService: PostService) {}

  onAddPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };

    this.postService.addPost(post.title, post.content);
    form.resetForm();
  }
}
