import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { PostCreateComponent } from '../app/posts/post-create/post-create.component';
import { PostListComponent } from '../app/posts/post-list/post-list.component';
import { HeaderComponent } from '../app/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PostCreateComponent, HeaderComponent, PostListComponent],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, BrowserAnimationsModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
