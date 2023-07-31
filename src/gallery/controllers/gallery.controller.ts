import { Controller, Get } from '@nestjs/common';
import { GalleryService } from '../services/gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}
  @Get()
  getGallery() {
    return this.galleryService.getGallery();
  }
}
