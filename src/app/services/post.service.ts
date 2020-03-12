import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { AppError } from '../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _Url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) {

  }

  getPost = () => {
    return this.http.get(this._Url)
  }

  createPost = (data) => {
    return this.http.post(this._Url, data)
      .pipe(
        catchError(
          (err: HttpErrorResponse) => {
            if (err.status === 400) return throwError(new BadInput(data))
            return throwError(new AppError())
          }
        )
      )
  }

  updatePost = (post, data) => {
    return this.http.patch(this._Url + "/" + post.id, data)
      .pipe(
        catchError(
          (err: HttpErrorResponse) => {
            if (err.status === 404) return throwError(new NotFoundError())
            return throwError(new AppError(err))
          }
        )
      )
  }

}
