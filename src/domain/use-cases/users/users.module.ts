import { Module } from '@nestjs/common';
import { GetUserByIdService } from './get-user-by-id.service';
import { CreateUserService } from './create-user.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GetUserByIdService, CreateUserService],
  exports: [GetUserByIdService, CreateUserService],
})
export class UsersModule {}
