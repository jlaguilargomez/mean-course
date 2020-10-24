import { Component } from '@angular/core';

interface PostContent {
  title: string;
  content: string;
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // public posts: PostContent[] = [
  //   { title: 'First Post', content: 'This is the first post content' },
  //   { title: 'Second Post', content: 'This is the second post content' },
  //   { title: 'Third Post', content: 'This is the third post content' },
  //   { title: 'Fourth Post', content: 'This is the fourth post content' }
  // ];

  public posts: PostContent[] = [];
}
