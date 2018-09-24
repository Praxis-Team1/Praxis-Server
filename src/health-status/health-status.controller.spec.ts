import { Test, TestingModule } from '@nestjs/testing';
import { HealthStatusController } from './health-status.controller';

describe('HealthStatus Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HealthStatusController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HealthStatusController = module.get<HealthStatusController>(HealthStatusController);
    expect(controller).toBeDefined();
  });
});
