import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  posts: Post[];

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number=0;
  @Input() dontLoveIts: number=0;
  @Input() create_at: Date;
  
  
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  inLove() {
    this.loveIts++;
  }

  inDontLove() {
    this.dontLoveIts++;
  }

  onDeletePost(post: Post) {
    if (confirm("Are you sure to delete this post?")) {
      this.postsService.removePost(post);
    }
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

}
