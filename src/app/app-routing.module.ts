import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'posts', canActivate: [AuthGuardService], component: PostListComponent },
  { path: 'posts/new', canActivate: [AuthGuardService], component: NewPostComponent },
  { path: 'posts/view/:id', canActivate: [AuthGuardService], component: SinglePostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: "**", redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
