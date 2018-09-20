import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';

describe('Students Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StudentsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: StudentsController = module.get<StudentsController>(StudentsController);
    expect(controller).toBeDefined();
  });
});
