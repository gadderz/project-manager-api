import { Module } from '@nestjs/common';
import { GetUserByIdService } from './get-user-by-id.service';
import { CreateUserService } from './create-user.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { GetUserByEmailService } from './get-user-by-email.service';

@Module({
  imports: [DatabaseModule],
  providers: [GetUserByIdService, CreateUserService, GetUserByEmailService],
  exports: [GetUserByIdService, CreateUserService, GetUserByEmailService],
})
export class UsersModule {}
