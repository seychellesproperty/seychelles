import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  constructor(private router: Router,
              private galleryService: GalleryService) { }
  images = new Array;

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

  goBack() {
    this.router.navigate(['/']) .then(() => { window.location.reload(); });
  }

}
