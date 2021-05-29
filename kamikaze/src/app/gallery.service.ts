import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }
  headers: HttpHeaders | undefined;

  setHeader() {
    this.headers = new HttpHeaders()
      .set('Origin', 'http://localhost');
  }

  getImages() {
    return this.httpClient.get('http://localhost:3000/get-images', {headers: this.headers});
  }

  uploadImage(data: any) {
    return this.httpClient.post('http://localhost:3000/save-image', data,{headers: this.headers});
  }
}
