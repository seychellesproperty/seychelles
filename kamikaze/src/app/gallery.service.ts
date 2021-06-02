import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }
  fields = 'media_url,media_type,caption';
  tokenIG = 'IGQVJXcDZAmRWU5cFhpQlhvRVF5akhHRTlFaFB0dFNXSnVBdzMwSHRTbXR6X2U0YVlQbkNscHBWVHZA2emU5S19qRk5GSVQ0N2JjTnlVOG9mM2hXeFlkbHpsSFIzbGRDeGdTVDhnNlpB';

  loadPhotosFromInstagram() {

    return this.httpClient.get('https://graph.instagram.com/me/media?fields=' + this.fields + '&access_token=' + this.tokenIG + '&limit=100');
  }
}
