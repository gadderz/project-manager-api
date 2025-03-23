import { Module } from '@nestjs/common';
import { CreateProjectService } from './create-project.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { GetAllProjectsService } from './get-all-projects.service';

@Module({
  providers: [CreateProjectService, GetProjectByIdService, GetAllProjectsService]
})
export class ProjectsModule {}
