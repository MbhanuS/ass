import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  @Input() searchValue;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.httpService.gettingPosts().subscribe(data => {
      this.posts = data
    })
  }

}
