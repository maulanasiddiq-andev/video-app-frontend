import { HttpClient, HttpParams } from '@angular/common/http';
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

  getVideos(params: any): Observable<BaseResponse<SearchResponse<Video>>> {
    let queryParams = new HttpParams();

    for (const key of Object.keys(params)) {
      queryParams = queryParams.set(key, params[key].toString())
    }

    return this.http.get(this.url, { params: queryParams }).pipe(map((response: BaseResponse<SearchResponse<Video>>) => response))
  }
}
