import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersByIdService } from './get-users-by-id.service';

describe('GetUsersByIdService', () => {
  let service: GetUsersByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUsersByIdService],
    }).compile();

    service = module.get<GetUsersByIdService>(GetUsersByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
