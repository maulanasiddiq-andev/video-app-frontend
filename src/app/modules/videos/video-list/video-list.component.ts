import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video';
import { VideoService } from 'src/app/core/services/video.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-video-list',
  imports: [NgFor, DatePipe, NgIf],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit {
  baseUrl: string = environment.baseUrl;

  videos: Video[] = [];
  pageSize: number = 9;
  page: number = 1;
  hasNextPage: boolean = false;

  isLoading: boolean = false;
  isLoadingMore: boolean = false;

  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    if (this.page == 1) {
      this.isLoading = true;
    } else {
      this.isLoadingMore = true;
    }

    const params = {
      pageSize: this.pageSize,
      page: this.page
    }

    this.videoService.getVideos(params).subscribe(result => {
      this.isLoading = false;
      this.isLoadingMore = false;

      if (result.succeed) {
        result.data.items.forEach(item => {
          this.videos.push(item);
        });

        this.pageSize = result.data.pageSize;
        this.hasNextPage = result.data.hasNextPage;
      }
    });
  }

  onScroll(event: any) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop == element.clientHeight) {
      if (this.isLoading || this.isLoadingMore) return;

      if (this.hasNextPage) {
        this.page++;
        this.getVideos();
      }
    }
  }
}
