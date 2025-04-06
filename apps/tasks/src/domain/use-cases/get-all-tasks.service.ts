import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '../../infrastructure/database/tasks.repository.service';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';

@Injectable()
export class GetAllTasksService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) { }

  async execute(userId: number ): Promise<ITask[]> {

    const tasks = await this.tasksRepository.findAll(userId);
    if (!tasks) {
      throw new Error('Erro ao listar tarefas');
    }
    
    return tasks;
  }
}