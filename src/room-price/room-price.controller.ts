import {
  Controller, Get, Post, Body, Param, Query,
  UseInterceptors,
} from '@nestjs/common';
import { RoomPrice } from './room-price.interface'
import { PriceService } from './price/price.service'
import { TransformInterceptor } from '../common/common-response'

@Controller('price')
@UseInterceptors(new TransformInterceptor())
export class RoomPriceController {

  constructor(private readonly roomPriceService: PriceService) { }

  @Get()
  getPrice(): RoomPrice[] {
    return this.roomPriceService.getAll();
  }

  @Get(':location')
  getPriceByLocation(@Param('location') location: string, @Query('price') price?: number): RoomPrice {
    if (price) {
      price = +price
    }
    return this.roomPriceService.getPrice(location, price);
  }

  @Post()
  addPrice(@Body() body: RoomPrice): RoomPrice {
    return this.roomPriceService.addPrice(body.location, body.baseline)
  }
}
