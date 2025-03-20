import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ImageModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
