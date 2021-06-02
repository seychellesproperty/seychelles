import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../gallery.service";
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'Seychelles Property';
  showImage = false;
  images = new Array;
  page = 'home';
  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
    this.galleryService.loadPhotosFromInstagram().subscribe(res => {
      console.log(res);
      let response = Object.assign(res);
      response.data.forEach((image: any) => {
        if (image.media_type == 'CAROUSEL_ALBUM' || image.media_type == 'IMAGE') {
          this.images.push({link: image.media_url, description:image.caption || ''});
        }
      });
    });
  }

}
