import { Module } from '@nestjs/common';
import { GetUsersByIdService } from './get-users-by-id.service';
import { CreateUserService } from './create-user.service';

@Module({
  providers: [GetUsersByIdService, CreateUserService]
})
export class UsersModule {}
