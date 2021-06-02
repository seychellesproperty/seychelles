import {Component, OnInit} from '@angular/core';
import {GalleryService} from "./gallery.service";
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Seychelles Property';
  showImage = false;
  images = new Array;
  page = 'home';
  constructor(private galleryService: GalleryService) {
  }
  ngOnInit() {
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
