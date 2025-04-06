// import { ITask } from "./task.interface";
import { ITask } from "apps/tasks/src/domain/interfaces/task.interface";
import { IUser } from "./user.interface";

export class IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}