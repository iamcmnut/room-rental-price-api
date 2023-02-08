import { Module } from '@nestjs/common';
import { PriceService } from './price/price.service';
import { RoomPriceController } from './room-price.controller';

@Module({
  providers: [PriceService],
  controllers: [RoomPriceController]
})
export class RoomPriceModule {}
