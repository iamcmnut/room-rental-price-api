import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomPriceModule } from './room-price/room-price.module';

@Module({
  imports: [RoomPriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
