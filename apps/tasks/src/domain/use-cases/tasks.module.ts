import { Module } from '@nestjs/common';
import { UpdateTaskService } from './update-task.service';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [GetAllTasksService, GetTaskByIdService, CreateTaskService, UpdateTaskService],
  exports: [GetAllTasksService, GetTaskByIdService, CreateTaskService, UpdateTaskService],
})
export class TasksModule {}
