import { Controller, Get, Query, Param } from '@nestjs/common';
import { GalleryService } from '../services/gallery.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Gallery')
@Controller('gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}
  @Get()
  getGallery(
    @Query('section') section: string,
    @Query('sort') sort: string,
    @Query('window') window: string,
    @Query('page') page: number,
  ) {
    return this.galleryService.getGallery(section, sort, window, page);
  }
  @Get('post/:id')
  getPostById(@Param('id') id: string) {
    return this.galleryService.getPostById(id);
  }
}
