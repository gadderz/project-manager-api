import { Injectable } from '@nestjs/common';
import { TasksRepositoryService } from 'apps/tasks/src/infrastructure/database/tasks.repository.service';
import { ITask } from '../interfaces/task.interface';
import { BaseUseCase } from '@app/common/interfaces/base-use-case';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) { }

  async execute(payload: { taskId: number; userId: number }): Promise<ITask> {

    const task = await this.tasksRepository.findById(payload.taskId, payload.userId);
    if (!task) {
      throw new Error('Erro ao listar tarefas');
    }

    return task;
  }
}