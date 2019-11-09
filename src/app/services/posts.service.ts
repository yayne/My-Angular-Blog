import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  httpClient: any;
  formData: { title: string; content: string; create_at: string; };


  constructor(private http: HttpClient) { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  savePostsToServer() {
    this.httpClient
    .post('https://myangular-blog-fafa3.firebaseio.com/posts.json', this.posts)
    .subscribe(
      () => {
        console.log('Enregistrement termine');
      },
      (error) => {
        console.log('Erreur de sauvegarde! ' + error);
      }
    )
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
      //console.log(this.emitPosts());
    });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
