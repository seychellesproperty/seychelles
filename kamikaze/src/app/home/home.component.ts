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
  page = 'home';
  imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

}
