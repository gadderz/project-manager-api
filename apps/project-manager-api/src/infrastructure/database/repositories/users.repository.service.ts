import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService extends Repository<UserEntity> implements IUsersRepository {
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
  findById(id: number): Promise<IUser | null> {
    return this.findOneBy({ id });
  }

  add(payload: DeepPartial<IUser>): Promise<IUser> {
    return this.save(payload) as Promise<IUser>;
  }

  findByEmail(email: string): Promise<IUser | null> {
    return this.findOneBy({ email });
  }
}