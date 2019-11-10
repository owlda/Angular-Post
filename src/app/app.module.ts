import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import { Menu } from './navigation/navigation.component';
import { ToolbarMultirowClass } from './navbar/navbar.component';
import { FooterClass } from './footer/footer.component';
import { CreatePostClass } from './posts/create-post/create-post.component';
import { ListPostClass } from './posts/list-post/list-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostClass,
    ListPostClass,
    Menu,
    ToolbarMultirowClass,
    FooterClass
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
