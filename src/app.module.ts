import { Module } from '@nestjs/common';
import { GalleryController } from './gallery/controllers/gallery.controller';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryService } from './gallery/services/gallery.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [GalleryModule, ConfigModule.forRoot()],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class AppModule {}
