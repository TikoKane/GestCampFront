import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs/observable';
=======
import { Observable } from 'rxjs';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
import { delay, map } from 'rxjs/operators';

const TOTAL_PAGES = 7;

export class NewsPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<NewsPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}
