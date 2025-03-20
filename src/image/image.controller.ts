import {
  BadRequestException,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { Express } from 'express';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('bg-delete')
  @UseInterceptors(FileInterceptor('file'))
  async deleteBackgroundImage(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    const processedImage = await this.imageService.deleteBackgroundImage(
      file.buffer,
    );
    res.setHeader('Content-Type', 'image/png');
    res.send(processedImage);
  }
  catch(error) {
    console.error('Error al procesar la imagen:', error);
    throw new BadRequestException('Error al procesar la imagen', error);
  }
}
