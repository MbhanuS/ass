import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, ...args: any[]): any {
    let posts
    if(args[0] === undefined) {
      return value
    } else {
      let search = args[0].toLowerCase()
      posts = value.filter(post => {
        let titleSearch = post['title'].substring(0, search.length)
        let bodySearch = post['body'].substring(0, search.length)
        if(post['title'].includes(search)) {
          return post
        } else if(post['body'].includes(search)) {
          return post
        }
      })
      return posts
    }
  }

}
