import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }
  fields = 'media_url,media_type,caption';
  tokenIG = '';

  loadPhotosFromInstagram() {

    return this.httpClient.get('https://graph.instagram.com/me/media?fields=' + this.fields + '&access_token=' + this.tokenIG + '&limit=100');
  }
}
