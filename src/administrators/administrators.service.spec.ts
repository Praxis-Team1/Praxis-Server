import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';

describe('AdministratorsService', () => {
  let service: AdministratorsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministratorsService],
    }).compile();
    service = module.get<AdministratorsService>(AdministratorsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
