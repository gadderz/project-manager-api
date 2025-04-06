import { Module } from '@nestjs/common';
import { CreateProjectService } from './create-project.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { GetAllProjectsService } from './get-all-projects.service';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CreateProjectService, GetProjectByIdService, GetAllProjectsService],
  exports: [CreateProjectService, GetAllProjectsService, GetProjectByIdService],
})
export class ProjectsModule {}
