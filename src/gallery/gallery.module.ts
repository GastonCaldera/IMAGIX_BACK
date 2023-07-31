import { Module } from '@nestjs/common';
import { GalleryService } from './services/gallery.service';
import { GalleryController } from './controllers/gallery.controller';

@Module({
  imports: [],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
