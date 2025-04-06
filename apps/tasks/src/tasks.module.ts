import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule, DomainModule],
  providers: [TasksService],
})
export class TasksModule {}
