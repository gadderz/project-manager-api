import { Controller, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateTaskService } from 'apps/tasks/src/domain/use-cases/create-task.service';
import { GetAllTasksService } from 'apps/tasks/src/domain/use-cases/get-all-tasks.service';
import { GetTaskByIdService } from 'apps/tasks/src/domain/use-cases/get-task-by-id.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) { }

  @MessagePattern({ cmd: 'get_tasks' })
  async findAll(@Payload() data: { userId: number }) {
    try {
      console.log('recebendo mensagens em task');

      return await this.getAllTasksUseCase.execute( data.userId );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'get_task_by_id' })
  async findOne(@Payload() data: { userId: number; taskId: number }) {
    try {
      
      return await this.getTaskByIdUseCase.execute({
        userId: data.userId,
        taskId: data.taskId,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'create_task' })
  async create(@Payload() data: { task: CreateTaskDto; userId: number }) {
    try {

      return await this.createTaskUseCase.execute({
        userId: data.userId,
        task: data.task,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
