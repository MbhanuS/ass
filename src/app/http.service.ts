import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private $http: HttpClient) { }

  gettingPosts() {
    return this.$http.get(`${this.baseUrl}`)
  }
}
