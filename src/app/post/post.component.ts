import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { error } from 'util';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response
      })
  }


  createPost(title: HTMLInputElement) {
    let val = { title: title.value }
    title.value = ""
    this.service.createPost(val).subscribe(res => {
      val['id'] = res['id']
      this.posts.unshift(val)
    }),
      (error: AppError) => {
        if (error instanceof BadInput)
          alert('Bad Request')
        else
          throw error
      }

  }


  updatePost = (post) => {
    let data = { isClicked: true }
    this.service.updatePost(post, data).subscribe(response => {
      console.log(response)
    }, (error: AppError) => {
      if (error instanceof NotFoundError)
        alert('Page not Found')
      else
        throw error
    })
  }


}
