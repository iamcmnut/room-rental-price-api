import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Usage: GET /price/sathon?price=15000'
      + '<br> Note: This api ignore the room size';
  }
}
