import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }
  headers: HttpHeaders | undefined;
  serverUrl = 'http://localhost:3000';

  setHeader() {
    this.headers = new HttpHeaders()
      .set('Origin', 'http://localhost');
  }

  getImages() {
    return this.httpClient.get(this.serverUrl + '/get-images', {headers: this.headers});
  }

  uploadImage(data: any) {
    return this.httpClient.post(this.serverUrl + '/save-image', data,{headers: this.headers});
  }
}
