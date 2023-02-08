import { Injectable } from '@nestjs/common';
import { RoomPrice } from '../room-price.interface'

@Injectable()
export class PriceService {

  private locations = new Map<string, RoomPrice>()

  public getBasePrice(): number {
    return 30000;
  }

  public getAll(): RoomPrice[] {
    return [...this.locations.values()]
  }

  public getPrice(location?: string, price?: number): RoomPrice {

    if (!location) {
      location = 'sathon'
    }

    let roomPrice: RoomPrice = this.locations.get(location)
    if (!roomPrice) {
      roomPrice = {
        location: 'sathon',
        baseline: 12000,
      }
    }

    if (price) {
      roomPrice.inputprice = price
      roomPrice.priceDiffRatio = (price - roomPrice.baseline) / roomPrice.baseline
    }

    return roomPrice;
  }

  public addPrice(location: string, baselinePrice: number): RoomPrice {
    this.locations.set(location, {
      location: location,
      baseline: baselinePrice,
    })
    return this.locations.get(location)
  }
}
