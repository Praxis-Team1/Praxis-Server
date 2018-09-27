import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsController } from '../repository/administrators.controller';

describe('Administrators Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AdministratorsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AdministratorsController = module.get<AdministratorsController>(AdministratorsController);
    expect(controller).toBeDefined();
  });
});
