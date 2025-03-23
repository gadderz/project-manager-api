import { Injectable } from '@nestjs/common';
import { ITask } from 'src/domain/interfaces/task.interface';
import { UpdateTaskDto } from 'src/gateways/controllers/tasks/dtos/update-task.dto';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../base-use-case';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) { }

  async execute(payload: { task: UpdateTaskDto; userId: number; }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    await this.tasksRepository.updateById(payload.task);

    const task = await this.tasksRepository.findById(payload.task.id);
    if (!task) {
      throw new Error('Tarefa não encontrado');
    }
    
    return task;
  }
}