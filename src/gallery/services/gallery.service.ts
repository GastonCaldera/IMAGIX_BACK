import { Injectable } from '@nestjs/common';

@Injectable()
export class GalleryService {
  async getGallery() {
    try {
      const myHeaders = new Headers();
      const clientId = `Client-ID ${process.env.IMGUR_CLIENT_ID}`;
      myHeaders.append('Authorization', clientId);

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const apiUrl = `https://api.imgur.com/3/gallery/hot/viral/day/1}`;
      const response = await fetch(apiUrl, requestOptions);
      return response.json();
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
}
