import { removeBackground } from '@imgly/background-removal-node';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  // this service delete background image
  async deleteBackgroundImage(image: Buffer): Promise<Buffer> {
    try {
      // remove background from image
      const imageToBlob = this.bufferToBlob(image);
      const result = await removeBackground(imageToBlob);
      return Buffer.from(await result.arrayBuffer());
    } catch (error: any) {
      throw new BadRequestException('Error removing background: ' + error);
    }
  }
  bufferToBlob(buffer, mimeType = 'image/png') {
    return new Blob([buffer], { type: mimeType });
  }
}
