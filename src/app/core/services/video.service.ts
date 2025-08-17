import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { SearchResponse } from '../models/search-response';
import { Video } from '../models/video';
import { BaseResponse } from '../models/base-response';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url: string = environment.apiUrl + "video";

  constructor(
    private http: HttpClient
  ) { }

  getVideos(): Observable<BaseResponse<SearchResponse<Video>>> {
    return this.http.get(this.url).pipe(map((response: BaseResponse<SearchResponse<Video>>) => response))
  }
}
