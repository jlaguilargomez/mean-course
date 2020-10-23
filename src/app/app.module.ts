import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { PostCreateComponent } from '../app/posts/post-create/post-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PostCreateComponent],
  imports: [BrowserModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
