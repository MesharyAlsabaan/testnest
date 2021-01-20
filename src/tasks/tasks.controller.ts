import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import{Task, Taskstatus} from './task.model'
import { title } from 'process';
import { Test } from '@nestjs/testing';
import{CreatDto} from '../tasks/dto/creat.dto'
import { TaskstatusValidation } from './pipes/status-validation.pipe';

@Controller('tasks')
export class TasksController {
constructor(private tasksService:TasksService){}

@Get()
getAllTasks():Task[]{
return this.tasksService.getallTasks();
}

@Get('/:id')
getTaskById(@Param('id') id:number):Task{

    return this.tasksService.gettaskbyID(id);
}


@Delete('/:id')
deleteTaskById(@Param('id') id:number){

     this.tasksService.delete(id);
}

@Post()
@UsePipes(ValidationPipe)
create_task(@Body() CreatDto:CreatDto):Test{

    console.log(CreatDto);

return this.tasksService.createTask(CreatDto);
}

@Patch('/:id/status')
updatestatus(
@Param('id') id:number,
@Body('status',TaskstatusValidation) status:Taskstatus

) :Task{
    return this.tasksService.updateStatus(id,status);


}

}
