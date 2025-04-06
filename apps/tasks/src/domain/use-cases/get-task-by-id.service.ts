import { Injectable } from '@nestjs/common';
// import { ITask } from '@project-manager-api/domain/interfaces/task.interface';
import { TasksRepositoryService } from 'apps/tasks/src/infrastructure/database/tasks.repository.service';
import { BaseUseCase } from '../../../../project-manager-api/src/domain/use-cases/base-use-case';
import { ITask } from '../interfaces/task.interface';

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