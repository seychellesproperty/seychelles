import {Component, OnInit} from '@angular/core';
import {GalleryService} from "./gallery.service";
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kamikaze';
  showImage = false;
  images = new Array;
  private base64_str: string | null | undefined;
  constructor(private galleryService: GalleryService) {
  }
  ngOnInit() {
    this.galleryService.getImages().subscribe(res => {
      let obj = Object.assign(res);
      obj.images.forEach((entry: object ) => {
        this.images.push(entry);
      })
    });
  }

  uploadImage(image: any) {
    if (image.size > 10 * 1024 * 1024) {
      alert('File size is over 10 MB!');
    }
    else {
      this.getBase64(image).then(() => {
        console.log(this.base64_str);
        this.uploadImageToServer(image);
      });
    }
  }

  getBase64(event:any) {
    return new Promise<void>((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(event);
      reader.onload = () => {
        this.base64_str = reader.result ? reader.result.toString().split(',')[1] : null;
        resolve();
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject();
      };
    });
  }

  uploadImageToServer(image: any) {
    this.galleryService.uploadImage({photo: this.base64_str}).subscribe(res => {

    }, err => console.log(err.message));
  }
}
