import { Test, TestingModule } from '@nestjs/testing';
import { RoomPriceController } from './room-price.controller';

describe('RoomPriceController', () => {
  let controller: RoomPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomPriceController],
    }).compile();

    controller = module.get<RoomPriceController>(RoomPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
